import React, { Component } from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
export default class modalsimple extends Component {
  render() {
    state = { open: false };
    show = size => () => this.setState({ size, open: true });
    close = () => this.setState({ open: false });
    const { open, size } = this.state;
    return (
      <Modal size={size} open={open} onClose={this.close} basic>
        <Header icon="warning" content={title} />
        <Modal.Content>
          <h3>{content}</h3>
        </Modal.Content>
        <Modal.Actions>
          <Button color="green" onClick={this.close}>
            <Icon name="checkmark" /> Got it
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
