import React, { Component } from "react";
import "./training.css";
export default class ButtonLoader extends Component {
  state = {
    loading: false
  };

  fetchData = () => {
    this.setState({ loading: true });

    //Faking API call here
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  };

  render() {
    const { loading } = this.state;

    return (
      <div className="margins">
        <p className="button" onClick={this.fetchData} disabled={loading}>
          {loading && (
            <i
              className="fa fa-refresh fa-spin spinner"
            />
          )}
          {loading && <span></span>}
          {!loading && <span>Submit</span>}
        </p>
      </div>
    );
  }
}
