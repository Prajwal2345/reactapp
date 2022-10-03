import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AddUser extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      username: "",
      email: "",
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  handleChangeUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const users = {
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
    };

    axios
      .post("https://young-spire-60242.herokuapp.com/api/new/user/", users)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-5 mt-4 shadow">
            <h2 className="text-center m-4">Register</h2>
            <form onSubmit={this.handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={this.handleChangeName}
                />

                <br />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.handleChangeUsername}
                />
                <br />

                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleChangeEmail}
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
