import React, { Component } from "react";
const MyContext = React.createContext();

export class MyProvider extends Component {
  state = {
    name: "Justin",
    activities: ["Technology", "Music", "Snowboarding"],
    age: 28
  };

  render() {
    return <MyContext.Provider>{this.props.children}</MyContext.Provider>;
  }
}
