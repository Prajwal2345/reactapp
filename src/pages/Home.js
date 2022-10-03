import axios from "axios";
import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "./Home.css";

export default class Home extends Component {
  state = {
    blogs: [],
  };

  componentDidMount() {
    axios
      .get("https://young-spire-60242.herokuapp.com/api/blogs")
      .then((response) => {
        const blogs = response.data;
        this.setState({ blogs });
      })
      .catch(() => {
        console.log("Error Retrieving Data!!!");
      });
  }

  render() {
    return (
      <div>
        <h1 className="fs-1">
          <b>
            <strong>Blogs</strong>
          </b>
        </h1>

        <div className="row">
          {this.state.blogs.map((blog) => (
            <>
              {["Dark"].map((variant) => (
                <Card
                  bg={variant.toLowerCase()}
                  key={variant}
                  text={variant.toLowerCase() === "light" ? "dark" : "white"}
                  style={{
                    width: "18%",
                    marginLeft: "30%",
                  }}
                  className="row mb-5 mx-5 rounded shadow "
                >
                  <Card.Body key={blog.id}>
                    <Card.Title> {blog.title} </Card.Title>
                    <Card.Text>{blog.body}</Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </>
          ))}
        </div>
      </div>
    );
  }
}
