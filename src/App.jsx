import { useState } from "react";
import "./App.css";
import Badge from "./components/Badge"

function App() {
  return (
    <>
    <div className="badges-container">
      <Badge color="gray" shape="square">Badge</Badge>
      <Badge color="red" shape="square">Badge</Badge>
      <Badge color="yellow" shape="square">Badge</Badge>
      <Badge color="green" shape="square">Badge</Badge>
      <Badge color="blue" shape="square">Badge</Badge>
      <Badge color="indigo" shape="square">Badge</Badge>
      <Badge color="pink" shape="square">Badge</Badge>
    </div>
    <div className="badges-container">

      <Badge color="gray" shape="pill">Badge</Badge>
      <Badge color="red" shape="pill">Badge</Badge>
      <Badge color="yellow" shape="pill">Badge</Badge>
      <Badge color="green" shape="pill">Badge</Badge>
      <Badge color="blue" shape="pill">Badge</Badge>
      <Badge color="indigo" shape="pill">Badge</Badge>
      <Badge color="pink" shape="pill">Badge</Badge>
    </div>
    </>
  )
}

export default App;
