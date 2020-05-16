/*  N. R Yamasinghe  IT18233704 version - 01 */
import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context";
import styled from "styled-components";

class menuBar extends Component {
  // Accessing context API
  static contextType = ProductContext;
  renderUrl(item) {
    const parts = item.split("/");
    const combined = parts.join("");
    return combined;
  }

  render() {
    const { menuData, getBreadcrumb } = this.context;
    return (
      <Menu vertical className="menuBar">
        {menuData.map((menu) => (
          <Menu.Item key={menu.header}>
            <Menu.Header>{menu.header}</Menu.Header>
            <Menu.Menu>
              {menu.list.map((item) => (
                <Menu.Item key={item.name}>
                  <StyleMenuItem
                    to={"/" + this.renderUrl(item.link)}
                    onClick={() => getBreadcrumb(item.name)}
                  >
                    {item.name}
                  </StyleMenuItem>
                </Menu.Item>
              ))}
            </Menu.Menu>
          </Menu.Item>
        ))}
      </Menu>
    );
  }
}
export default menuBar;

const StyleMenuItem = styled(Link)`
  text-transform: capitalize;
  position: relative;
  display: block;
  color: black !important
  outline-width: 0;
  transition: all 0.3s ease-out;
`;
