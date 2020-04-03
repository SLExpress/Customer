import React, { Component } from "react";
import SiteSettingsCreateCard from "../siteSettings/siteSettingsCreateCard";

export default class siteSettingsCreate extends Component {
  render() {
    const subdomain = this.props.match.params.subdomain;
    console.log(subdomain);
    return (
      <div style={{ marginBottom: "120px" }}>
        <SiteSettingsCreateCard subdomain={subdomain} />
      </div>
    );
  }
}
