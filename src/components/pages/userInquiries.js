import React from "react";
import Forms from "./../common/form";
import { Grid, Message, Icon, Form, Card } from "semantic-ui-react";
import { CButtons } from "./../table/buttons";
import { ProductContext } from "./../../context";
import * as inquiryService from "./../../services/inquiryService";
import Joi from "joi-browser";
import styled from "styled-components";

class userInquiries extends Forms {
  static contextType = ProductContext;
  state = {
    data: {
      _id: this.props.match.params.id,
      message: ""
    },
    errors: {}
  };

  schema = {
    message: Joi.string()
      .required()
      .min(4)
      .label("Message")
  };

  doSubmit = async () => {
    try {
      const AdminMsg = this.state.data;
      console.log("dd", AdminMsg._id);
      await inquiryService.replyTickets(AdminMsg);
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        this.setState({ errors });
      }
    }
  };

  render() {
    const { sortAllMsg } = this.context;
    console.log("Single", this.state.data);

    return (
      <Grid.Column mobile={13} tablet={13} computer={13}>
        <br />
        <br />

        <br />
        <br />
        <Grid>
          <Grid.Column mobile={2} tablet={2} computer={2}></Grid.Column>
          <Grid.Column mobile={10} tablet={10} computer={10}>
            <Card fluid>
              <Card.Content>
                <br />
                <br />
                {sortAllMsg.map((d, index) => (
                  <>
                    {!d.adminReply && (
                      <>
                        <Grid key={index}>
                          <Grid.Column
                            mobile={1}
                            tablet={1}
                            computer={1}
                          ></Grid.Column>
                          <Grid.Column mobile={1} tablet={1} computer={1}>
                            <Icon name="user circle" size="big" />
                          </Grid.Column>
                          <br />
                          <Grid.Column mobile={13} tablet={13} computer={13}>
                            <Message color="white">
                              {d.replyId.userReply}
                            </Message>
                          </Grid.Column>
                          <br />
                        </Grid>
                        <br />
                      </>
                    )}

                    {d.adminReply && (
                      <>
                        <Grid>
                          <Grid.Column
                            mobile={1}
                            tablet={1}
                            computer={1}
                          ></Grid.Column>
                          <Grid.Column mobile={13} tablet={13} computer={13}>
                            <Message>{d.adminReply}</Message>
                          </Grid.Column>
                          <br />
                          <Grid.Column mobile={1} tablet={1} computer={1}>
                            <Icon name="user circle outline" size="big" />
                          </Grid.Column>
                          <br />
                        </Grid>

                        <br />
                      </>
                    )}
                  </>
                ))}
              </Card.Content>
              <Card.Content>
                <Grid>
                  <Grid.Column mobile={16} tablet={16} computer={16}>
                    <StyledForm onSubmit={this.handleSubmit}>
                      {this.renderInput("message", "Message")}
                      <br />
                      <CButtons name="Send" color="#40a3dc" />
                    </StyledForm>
                  </Grid.Column>
                </Grid>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </Grid.Column>
    );
  }
}

export default userInquiries;

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 25px;
`;
