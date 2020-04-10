/*  N. R Yamasinghe  IT18233704 version - 01 */
import React, { Component } from "react";
import { Confirm } from "semantic-ui-react";

class confirm extends Component {
  state = { open: false };

  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  render() {
    const { onDelete } = this.props;
    return (
      <div>
        <Confirm
          open={this.state.open}
          onCancel={this.close}
          onConfirm={(this.close, onDelete)}
        />
      </div>
    );
  }
}

export default confirm;
