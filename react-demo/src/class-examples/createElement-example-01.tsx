import React, { Component, createElement, cloneElement } from "react";
import { Button } from "antd";

const Home = ({ title }: { title: string }) => {
  return <div>{title}</div>;
};

export default class Example extends Component {
  render() {
    console.log("render", this);
    const p = createElement(
      "p",
      {
        title: "hello",
      },
      "你好",
      createElement(
        "span",
        {
          title: "hello",
        },
        "你好"
      )
    );
    const s1 = cloneElement(p, {
      title: "hello1",
    });

    const h1 = createElement(
      Home,
      {
        title: "hello111",
      },
      "你好11",
      createElement(
        "span",
        {
          title: "hello",
        },
        "你好"
      )
    );
    return (
      <div>
        {s1}-{h1}
      </div>
    );
  }
}
