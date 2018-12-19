import React, { Component } from 'react';
import { BroswerRouter as Router, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import About from "./pages/About";
import Search from "./pages/Search";
import Navbar from "./components/Navbars";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
            )
}

export default App;
