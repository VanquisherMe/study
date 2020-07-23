import React, { Component, Children, ReactDOM } from "react";
import { Button } from "antd";

const Cdn = ({ children }: { children: any }) => {
  console.log(Children.toArray(children));
  return (
    <div>
      {Children.map(children, (c) => {
        console.log(c);
        return c.type === "div" ? c : null;
      })}

      {/* {Children.only(children)} */}
      {/* {Children.toArray(children)} */}
    </div>
  );
};
class Cdn1 extends Component {
  render() {
    const { children } = this.props;
    // console.log(children.length);
    // console.log(Children.toArray(children).length);
    return (
      <div>
        {/* {Children.map(children, (c: any) => {
          console.log(c);
          return c.type === "div" ? c : null;
        })} */}

        {/* {Children.only(children)} */}
        {/* {Children.toArray(children)} */}
        {children}
      </div>
    );
  }
}

export default class Example extends Component {
  render() {
    return (
      <Cdn1>
        <div>
          1<span>3</span>
        </div>
        <span>2</span>
      </Cdn1>
    );
  }
}
