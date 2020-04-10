/*  N. R Yamasinghe  IT18233704 version - 01 */
import React from "react";
import Forms from "./../common/form";
import MenuBar from "./../common/menuBar";
import { Grid, Message, Icon, Form, Card } from "semantic-ui-react";
import { Buttons } from "./../table/buttons";
import { ProductContext } from "./../../context";
import { replyTickets } from "./../../services/inquiryService";
import Joi from "joi-browser";
import Swal from "sweetalert2";
import Moment from "react-moment";

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
      <div style={{ height: "850px" }}>
        <div className="col-sm-4 mb-5" style={{ marginLeft: "200px" }}>
          <MenuBar />
        </div>
        <Grid.Column
          mobile={13}
          tablet={13}
          computer={13}
          style={{ marginLeft: "200px", marginTop: "-920px" }}
        >
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
                              <Message positive>
                                {d.userReply}

                                <Card.Meta style={{ textAlign: "right" }}>
                                  {<Moment calendar>{d.time}</Moment>}
                                </Card.Meta>
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
                              <Message info>
                                {d.adminReply}
                                <Card.Meta style={{ textAlign: "right" }}>
                                  {<Moment calendar>{d.time}</Moment>}
                                </Card.Meta>
                              </Message>
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
          </Grid>
        </Grid.Column>
      </div>
    );
  }
}

export default userInquiries;
