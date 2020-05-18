/*  N. R Yamasinghe  IT18233704 version - 01 */
import React from "react";
import Forms from "./../common/form";
import MenuBar from "./../common/menuBar";
import { Grid, Message } from "semantic-ui-react";
import MessageBox from "./../../components/inquiries/messageBox";
import { ProductContext } from "./../../context";

import styled from "styled-components";

class customerInquiries extends Forms {
  static contextType = ProductContext;

  render() {
    const { sortAllMsg, inquiry, handleInquiries, handleReply } = this.context;

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
            <MessageBox
              sortAllMsg={sortAllMsg}
              id={this.props.match.params.id}
              inquiry={inquiry}
              inquiries={handleInquiries}
              handleReply={handleReply}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Column width={2} phone={2} tablet={2} computer={2}></Grid.Column>
      </Grid>
    );
  }
}

export default customerInquiries;
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
  }import inquiries from './inquiries ';

`;
