import React, { Component, createFactory, isValidElement } from "react";
import { Button } from "antd";

const Home = ({ title }: { title: string }) => {
  return <div>{title}</div>;
};

export default class Example extends Component {
  render() {
    const d = createFactory("span");
    console.log("render", d);

    return (
      <div>
        {isValidElement(d(null, "First1")).toString()}
        <br />
        {d(null, "First2")}
        <br />
        {d(null, "First3")}
        <br />
        {isValidElement(<div></div>).toString()}
      </div>
    );
  }
}
