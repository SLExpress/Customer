import React from "react";
import { Grid, Message, Icon, Form, Card } from "semantic-ui-react";
// import { TitleWapper } from "../../../Common/CommonStyle";
import styled from "styled-components";
import { ProductContext } from "./../../context";
// import _ from "lodash";
import Forms from "./../common/form";
import Joi from "joi-browser";
import { CButtons } from "./../table/buttons";
import * as inquiryService from "./../../services/inquiryService";

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
      //this.context.handleReply(this.state.data);
      //   const { state } = this.props.location;
      // window.location = state ? state.from.pathname : "/developertickets";
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
      <Grid.Column
        mobile={13}
        tablet={13}
        computer={13}
        // style={{ background: "#e9ecef;" }}
      >
        <br />
        <br />
        {/* <TitleWapper>Developer Inquiries</TitleWapper> */}
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

// const StyledTextarea = styled(Form.TextArea)`
//   width: 125%;
//   height: 100% !important;
// `;import Forms from './../../../Common/forms';

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 25px;
`;
