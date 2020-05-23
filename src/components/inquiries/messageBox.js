import React from "react";
import Forms from "./../common/form";
import { Grid, Message, Form, Card } from "semantic-ui-react";
import { Buttons } from "./../table/buttons";
import Joi from "joi-browser";
import Moment from "react-moment";
import styled from "styled-components";

class messageBox extends Forms {
  state = {
    data: {
      _id: "",
      message: "",
    },
    errors: {},
  };

  schema = {
    message: Joi.string().required().min(4).label("Message"),
  };
  componentDidMount = async () => {
    const id = this.props.id;
    this.setState({ data: this.setId(id) });

    await this.props.inquiries(id);
  };

  setId(id) {
    return {
      _id: id,
    };
  }

  doSubmit = async () => {
    try {
      const { data } = this.state;
      const UserMsg = this.state.data;
      if (
        data.message === "" ||
        data.message.length < 4 ||
        data.message === null
      ) {
        const errors = { ...this.state.errors };

        if (data.message.length < 4) {
          errors.message = `"Message"  length must be at least 4 characters long`;
        }
        if (data.message === "" || data.message === null) {
          errors.message = `"Message" can not be empty`;
        }

        this.setState({ errors });
      } else {
        this.props.handleReply(UserMsg.message, UserMsg._id);
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 422) {
        const errors = { ...this.state.errors };
        errors.message = ex.response.data.error;
      }
    }
  };
  render() {
    const { sortAllMsg, inquiry } = this.props;

    return (
      <Card fluid style={{ boxShadow: "none" }}>
        <Card.Content style={{ overflowY: "scroll" }}>
          <div style={{ height: "20rem" }}>
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

                      <br />
                      <Grid.Column mobile={10} tablet={10} computer={10}>
                        <StyledMessageUser>
                          {d.userReply}

                          <Card.Meta style={{ textAlign: "right" }}>
                            {<Moment calendar>{d.time}</Moment>}
                          </Card.Meta>
                        </StyledMessageUser>
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
                        mobile={6}
                        tablet={6}
                        computer={6}
                      ></Grid.Column>
                      <Grid.Column mobile={10} tablet={10} computer={10}>
                        <StyledMessageAdmin>
                          {d.adminReply}
                          <Card.Meta style={{ textAlign: "right" }}>
                            {<Moment calendar>{d.time}</Moment>}
                          </Card.Meta>
                        </StyledMessageAdmin>
                      </Grid.Column>
                      <br />

                      <br />
                    </Grid>

                    <br />
                  </>
                )}
              </>
            ))}
          </div>
        </Card.Content>
        {inquiry.open && (
          <Card.Content>
            <Grid>
              <Grid.Column mobile={16} tablet={16} computer={16}>
                <Form onSubmit={this.handleSubmit}>
                  {this.renderTextArea("message", "Message")}
                  <br />
                  <br />
                  <center>
                    <Buttons name="Send" color="#40a3dc" />
                  </center>
                </Form>
              </Grid.Column>
            </Grid>
          </Card.Content>
        )}
      </Card>
    );
  }
}

export const StyledMessageUser = styled(Message)`
  padding: 10px 14px !important;
  background: #c3fdb8 !important;
  margin: 10px 30px !important;
  border-radius: 9px !important;
  position: relative !important;
  animation: fadeIn 1s ease-in !important;
  box-shadow: none !important;

  &:after {
    content: "" !important;
    position: absolute !important;
    top: 50% !important;
    width: 0 !important;
    height: 0 !important;
    border: 20px solid transparent !important;
    border-bottom: 0 !important;
    margin-top: -10px !important;
  }

  &:after {
    left: 0 !important;
    border-right-color: #c3fdb8 !important;
    border-left: 0 !important;
    margin-left: -20px !important;
  }
`;

export const StyledMessageAdmin = styled(Message)`
  padding: 10px 14px !important;
  background: #addfff !important;
  margin: 10px 30px !important;
  border-radius: 9px !important;
  position: relative !important;
  animation: fadeIn 1s ease-in !important;
  box-shadow: none !important;

  &:after {
    content: "" !important;
    position: absolute !important;
    top: 50% !important;
    width: 0 !important;
    height: 0 !important;
    border: 20px solid transparent !important;
    border-bottom: 0 !important;
    margin-top: -10px !important;
  }

  &:after {
    right: 0 !important;
    border-left-color: #addfff !important;
    border-right: 0 !important;
    margin-right: -20px !important;
  }
`;

export default messageBox;
