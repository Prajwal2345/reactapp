import { Link } from "@mui/material";
import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-5 mt-4 shadow">
            <h2 className="text-center m-4">Log In</h2>
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                />
                <br />

                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
                <br />

                <div>
                  <button className="btn btn-success">Create</button>
                  <Link className="btn btn-danger mx-3" to="/">
                    Cancel
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
