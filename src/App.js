import React, { Component } from "react";
import "./App.css";
import Navbar from "./layout/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import AddBlog from "./pages/AddBlog";
import Error from "./layout/Error";
import AddUser from "./Users/AddUser";
import Login from "./Users/Login";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/new" element={<AddBlog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<AddUser />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
