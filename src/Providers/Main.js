import React, { Component } from "react";
import { AppContext } from "./context";

export class MyProvider extends Component {
  state = {
    name: "Justin",
    activities: ["Technology", "Music", "Snowboarding"],
    age: 28
  };

  render() {
    return <AppContext.Provider>{this.props.children}</AppContext.Provider>;
  }
}
