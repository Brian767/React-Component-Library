import { useState } from "react";
import "./App.css";
import Badge from "./components/Badge"
import Banner from "./components/Banner";

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

    <div className="banners-container">
      <Banner status="success">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner>
      <Banner status="warning">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</Banner>
      <Banner status="error">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</Banner>
      <Banner status="neutral">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner>
    </div>
   
    <div className="banners-container">
      <Banner status="success"></Banner>
      <Banner status="warning"></Banner>
      <Banner status="error"></Banner>
      <Banner status="neutral"></Banner>
    </div>
    </>
  )
}

export default App;
