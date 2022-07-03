import { Link } from "@reach/router";
import React, { Component } from "react";
import { Breadcrumb } from "react-bootstrap";

class BreadCrumbNav extends Component {
  // state = {  }
  // constructor(props){
  //     super(props)
  // }
  render() {
    return (
      <>
        <Breadcrumb>
          <Breadcrumb.Item href="/" target="_blank">
            Home
          </Breadcrumb.Item >
          <Breadcrumb.Item href={`/${this.props.data[0]}`} target="_blank">
            {this.props.data[0]}
          </Breadcrumb.Item>
          <Breadcrumb.Item to={`/${this.props.data[1]}`} target="_blank">
            {this.props.data[1]}
          </Breadcrumb.Item>
        </Breadcrumb>
      </>
    );
  }
}

export default BreadCrumbNav;
