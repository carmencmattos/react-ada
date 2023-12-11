import React, { Component } from "react";
class Header extends Component {
  render() {
    const { title, subtitle, info } = this.props;
    return (
      <>
        <h1 className="style-h3">{title}</h1>
        <h3>{subtitle}</h3>
        <h3 className="configSegH3">{info}</h3>
      </>
    );
  }
}
export default Header;
