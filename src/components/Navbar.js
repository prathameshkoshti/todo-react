import React from "react";
import { Menu, Icon, Header } from "semantic-ui-react";

function Navbar() {
  return (
    <Menu className="navbar">
      <Menu.Header>
        <Header size="large">
          <Icon name="check square"></Icon>
          Todo App
        </Header>
      </Menu.Header>
    </Menu>
  );
}

export default Navbar;
