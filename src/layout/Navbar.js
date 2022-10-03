import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-secondary rounded shadow p-3 mb-5 ">
      <div class="container">
        <Link class="navbar-brand text-light" to="/">
          <b>
            <strong>Bloggist</strong>
          </b>
        </Link>
        <button
          class="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link
                class="nav-link active text-light"
                aria-current="page"
                to="/"
              >
                <b>Home</b>
              </Link>
            </li>

            <li class="nav-item">
              <Link
                class="nav-link active text-light"
                aria-current="page"
                to="/about"
              >
                <b>About</b>
              </Link>
            </li>

            <li class="nav-item">
              <Link
                class="nav-link active text-light"
                aria-current="page"
                to="/new"
              >
                <b>Create Blog</b>
              </Link>
            </li>

            <li class="nav-item">
              <Link
                class="nav-link active text-light"
                aria-current="page"
                to="/login"
              >
                <b>Log In</b>
              </Link>
            </li>

            <li class="nav-item">
              <Link
                class="nav-link active text-light"
                aria-current="page"
                to="/register"
              >
                <b>Register</b>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
