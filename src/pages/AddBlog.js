import axios from "axios";
import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";

export default class AddBlog extends Component {
  constructor() {
    super();

    this.state = {
      title: "",
      body: "",
    };

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeBody = this.handleChangeBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeTitle = (event) => {
    this.setState({ title: event.target.value });
  };

  handleChangeBody = (event) => {
    this.setState({ body: event.target.value });
  };

  navigate = (event) => {
    useNavigate("/");
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const blog = {
      title: this.state.title,
      body: this.state.body,
    };

    axios
      .post("https://young-spire-60242.herokuapp.com/api/new", blog)
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
            <h2 className="text-center m-4">Create New Blog</h2>
            <form onSubmit={this.handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Title"
                  name="Title"
                  onChange={this.handleChangeTitle}
                />

                <br />
                <textarea
                  style={{ resize: "none" }}
                  type="text"
                  className="form-control"
                  placeholder="Body"
                  name="Body"
                  onChange={this.handleChangeBody}
                />
                <br />

                <div>
                  <button className="btn btn-success" onClick={this.navigate}>
                    Create
                  </button>
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
