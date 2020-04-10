import React from "react";
import "./HomeMenu.css";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

class HomeMenu extends React.Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div className="side-bar">
        <Menu pointing vertical className="menu-items">
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="news"
            active={activeItem === "news"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="events"
            active={activeItem === "events"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="merch"
            active={activeItem === "merch"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="gallery"
            active={activeItem === "gallery"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Georgia Scene"
            active={activeItem === "Georgia Scene"}
            onClick={this.handleItemClick}
          />
        </Menu>
      </div>
    );
  }
}

export default HomeMenu;
