/*  N. R Yamasinghe  IT18233704 version - 01 */
import React, { Component } from "react";
import Loader from "./../common/loader";
import MenuBar from "./../common/menuBar";
import { Grid, Card, Feed, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { ProductContext } from "./../../context";
import Moment from "react-moment";

class tickets extends Component {
  static contextType = ProductContext;

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
