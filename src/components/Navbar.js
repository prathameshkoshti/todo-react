import React from "react";
import { Menu, Icon, Header } from "semantic-ui-react";

function Navbar() {
  return (
    <Menu className="navbar inverted">
      <Menu.Header>
        <Header size="large" className="inverted">
          <Icon name="check square"></Icon>
          Todo App
        </Header>
      </Menu.Header>
    </Menu>
  );
}

export default Navbar;
