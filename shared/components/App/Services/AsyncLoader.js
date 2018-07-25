import React, { Component } from "react";
import loader from "../../assets/loader.svg";
class AsyncLoader extends Component {
  render() {
    return <div key={1} style={{textAlign:'center'}}> <img src={loader}/></div>;
  }
}

export default AsyncLoader;
