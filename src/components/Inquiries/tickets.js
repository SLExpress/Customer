/*  N. R Yamasinghe  IT18233704 version - 01 */
import React, { Component } from "react";
import Loader from "./../common/loader";
import MenuBar from "./../common/menuBar";
import { Grid, Card, Feed, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { closeTicket } from "./../../services/inquiryService";
import { ProductContext } from "./../../context";
import Moment from "react-moment";
import Swal from "sweetalert2";

class tickets extends Component {
  static contextType = ProductContext;

  ticketclosed = () => {
    Swal.fire({
      icon: "info",
      title: "Oops...",
      text: "This ticket has been already closed!",
      showConfirmButton: true,
      timer: 1500,
    });
  };

  ticketHandleclose = async (ticketId) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to reply to ticket again!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#008000",
        confirmButtonText: "Yes, close it!",
      }).then((result) => {
        if (result.value) {
          this.handleclose(ticketId);
          Swal.fire({
            icon: "success",
            title: "Closed!",
            text: "Ticket has been closed successfully",
            showConfirmButton: true,
            timer: 1500,
          }).then(function () {
            window.location = "/inquiries";
          });
        }
      });
    } catch (error) {}
  };

  async handleclose(ticketId) {
    await closeTicket(ticketId);
  }

  renderReplies = (user, admin) => {
    let count;
    count = user + admin;
    return count + " replies";
  };

  render() {
    const { tickets, loading, handleInquiries } = this.context;

    if (loading) {
      return <Loader />;
    }

    return (
      <div className="container" style={{ height: "850px" }}>
        <Grid.Column mobile={13} tablet={13} computer={13}>
          <div className="col-sm-4 mb-5">
            <MenuBar />
          </div>

          <Grid style={{ marginTop: "-870px" }}>
            <Grid.Column mobile={3} tablet={3} computer={3}></Grid.Column>
            <Grid.Column mobile={10} tablet={10} computer={10}>
              <Link to="/openNewTicket">
                <Button
                  content="Open new ticket"
                  labelPosition="left"
                  icon="plus square"
                  primary
                />
              </Link>
              {tickets.map((ticket, index) => (
                <Card fluid key={index}>
                  <Card.Content>
                    <Card.Header>{ticket.title}</Card.Header>
                  </Card.Content>
                  <Card.Content>
                    <Feed>
                      <Feed.Event>
                        <Feed.Label image="https://react.semantic-ui.com/images/avatar/small/jenny.jpg" />
                        <Feed.Content>
                          <Card.Meta>
                            {
                              <Moment fromNow ago>
                                {ticket.time}
                              </Moment>
                            }
                            ago
                          </Card.Meta>
                          <Feed.Summary>{ticket.ticketText}</Feed.Summary>
                          <Link
                            to={`/userInquiries/${ticket._id}`}
                            onClick={() => handleInquiries(ticket._id)}
                          >
                            {this.renderReplies(
                              ticket.adminReplies.length,
                              ticket.userReplies.length
                            )}
                          </Link>
                        </Feed.Content>
                      </Feed.Event>
                    </Feed>

                    <Card.Content extra>
                      <div>
                        <Link
                          to={`/userInquiries/${ticket._id}`}
                          onClick={() => handleInquiries(ticket._id)}
                        >
                          <Button basic color="green">
                            View
                          </Button>
                        </Link>
                        {ticket.open && (
                          <Link
                            onClick={() => this.ticketHandleclose(ticket._id)}
                          >
                            <Button basic color="red">
                              Close
                            </Button>
                          </Link>
                        )}
                        {!ticket.open && (
                          <Link onClick={this.ticketclosed}>
                            <Button basic color="red">
                              Closed
                            </Button>
                          </Link>
                        )}
                      </div>
                    </Card.Content>
                  </Card.Content>
                </Card>
              ))}
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </div>
    );
  }
}

export default tickets;
