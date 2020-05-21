/*  N. R Yamasinghe  IT18233704 version - 01 */
import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context";

class categoryMenu extends Component {
  // Accessing context API
  static contextType = ProductContext;

  render() {
    const { categories, filterSites } = this.context;

    return (
      <Menu vertical className="menu">
        <Menu.Item>
          <Menu.Header>
            <p>Categories</p>
          </Menu.Header>
          <Menu.Menu>
            {categories.map((item) => (
              <Menu.Item key={item._id}>
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/themes/${item.name}`}
                  onClick={() => {
                    filterSites(item._id);
                  }}
                >
                  <p className="text-color-ash">{item.name}</p>
                </Link>
              </Menu.Item>
            ))}
            <Menu.Item>
              <Link to="/allThemes">
                <p className="text-color-ash">All</p>
              </Link>
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>
      </Menu>
    );
  }
}
export default categoryMenu;
