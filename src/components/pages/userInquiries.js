/*  N. R Yamasinghe  IT18233704 version - 01 */
import React from "react";
import Forms from "./../common/form";
import MenuBar from "./../common/menuBar";
import { Grid, Message, Form, Card } from "semantic-ui-react";
import { Buttons } from "./../table/buttons";
import { ProductContext } from "./../../context";
import { replyTickets } from "./../../services/inquiryService";
import Joi from "joi-browser";
import Swal from "sweetalert2";
import Moment from "react-moment";
import styled from "styled-components";

class userInquiries extends Forms {
  static contextType = ProductContext;
  state = {
    data: {
      _id: this.props.match.params.id,
      message: "",
    },
    errors: {},
  };

  schema = {
    message: Joi.string().required().min(4).label("Message"),
  };

  componentDidMount = async () => {
    const id = this.props.match.params.id;
    await this.context.handleInquiries(id);
  };

  doSubmit = async () => {
    try {
      const UserMsg = this.state.data;
      await replyTickets(UserMsg);
      Swal.fire({
        icon: "success",
        title: "Message sent successfully",
        showConfirmButton: false,
        timer: 1500,
      }).then(function () {
        window.location = "/inquiries";
      });
    } catch (ex) {
      if (ex.response && ex.response.status === 422) {
        const errors = { ...this.state.errors };
        errors.message = ex.response.data.error;
      }
    }
  };

  render() {
    const { sortAllMsg, inquiry } = this.context;

    return (
      <Grid>
        <Grid.Row>
          <Grid.Column
            width={3}
            phone={3}
            tablet={3}
            computer={3}
            style={{ marginLeft: "30px", animation: "fadeIn 1s ease-in" }}
          >
            <MenuBar />
          </Grid.Column>

          <Grid.Column width={11} phone={11} tablet={11} computer={11}>
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
          </Grid.Column>
        </Grid.Row>
        <Grid.Column width={2} phone={2} tablet={2} computer={2}></Grid.Column>
      </Grid>
    );
  }
}

export default userInquiries;
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
