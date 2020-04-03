import React, { Component } from "react";
import { Grid, Card, Feed } from "semantic-ui-react";
// import { TitleWapper } from "../../../Common/CommonStyle";
import { Link } from "react-router-dom";
// import { DeveloperContext } from "../../../../context/developersContext";
import { ProductContext } from "./../../context";
import Moment from "react-moment";
// import _ from "lodash";
// import Loading from "./../../../Common/loading";

class DeveloperTickets extends Component {
  static contextType = ProductContext;

  renderReplies = (user, admin) => {
    let count;
    // if (user == 0 && admin == 0) count = 0;
    // else if (user != 0 && admin == 0) count = admin + 1;
    // else if (user == 0 && admin != 0) count = user + 1;
    // else
    count = user + admin;
    return count + " replies";
  };

  // renderDate(date) {
  //   return (
  //     <Moment fromNow ago>
  //       {date}
  //     </Moment>
  //   );
  // }
  render() {
    const { tickets, handleInquiries } = this.context;

    // if (loading) {
    //   return <Loading />;
    // }

    return (
      <Grid.Column mobile={13} tablet={13} computer={13}>
        {/* <TitleWapper>Developers Tickets</TitleWapper> */}
        <Grid>
          <Grid.Column mobile={3} tablet={3} computer={3}></Grid.Column>
          <Grid.Column mobile={10} tablet={10} computer={10}>
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
                          }{" "}
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
    );
  }
}

export default DeveloperTickets;
