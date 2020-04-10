/*  N. R Yamasinghe  IT18233704 version - 01 */
import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context";

class menuBar extends Component {
  // Accessing context API
  static contextType = ProductContext;

  render() {
    const { menuData } = this.context;
    return (
      <Menu vertical style={{ marginLeft: "-180px" }} className="menuBar">
        {menuData.map((menu) => (
          <Menu.Item key={menu.header}>
            <Menu.Header>{menu.header}</Menu.Header>
            <Menu.Menu>
              {menu.list.map((item) => (
                <Menu.Item key={item.name}>
                  <Link to={item.link}>
                    <p className="text-color-ash">{item.name}</p>
                  </Link>
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
