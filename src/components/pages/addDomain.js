/*  N. R Yamasinghe  IT18233704 version - 01 */
import React, { Component } from "react";
import AddDomainScreen from "./../addDomain/addDomainScreen";

class addDomain extends Component {
  render() {
    const script = this.props.match.params.id;
    return <AddDomainScreen script={script} />;
  }
}

export default addDomain;
