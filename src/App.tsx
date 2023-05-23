import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Mercadorias from "./components/Mercadorias";
import Produtos1 from "./components/Produtos1";

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero/>
      <Mercadorias/>
      <Produtos1/>
      
      {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
          </a>
          </header> */}
    </div>
  );
}

export default App;
