import React from "react";
import "semantic-ui-less/semantic.less";
import "./App.css";
import Navbar from "./components/Navbar";
import Boards from "./containers/Boards";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Boards />
    </div>
  );
}

export default App;
