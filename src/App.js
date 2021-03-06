import React, { useState } from "react";
import "./styles.css";
import { MyProvider } from "./Providers/Main";
import { Home } from "./Comps/Home";

export default function App() {
  const { chosenTheme, setchosenTheme } = useState({
    themes: "light"
  });
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <MyProvider>
        <Home />
      </MyProvider>
    </div>
  );
}
