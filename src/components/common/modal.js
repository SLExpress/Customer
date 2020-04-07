import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";

class modal extends Component {
  render() {
    const { open, size, close, onDelete, content, title } = this.props;

    return (
      <div>
        <center>
          <Modal
            size={size}
            open={open}
            onClose={close}
            centered
            style={{ marginLeft: "500px", height: "200px", marginTop: "200px" }}
          >
            <Modal.Header>{title}</Modal.Header>
            <Modal.Content>
              <p>{content}</p>
            </Modal.Content>
            <Modal.Actions>
              <Button negative onClick={close}>
                No
              </Button>
              <Button
                positive
                icon="checkmark"
                labelPosition="right"
                content="Yes"
                onClick={onDelete}
              />
            </Modal.Actions>
          </Modal>
        </center>
      </div>
    );
  }
}

export default modal;
