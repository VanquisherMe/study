import React, { Component } from "react";
import { Button } from "antd";
import dayjs from "dayjs";
export default class Example extends Component {
  state = {
    count: 0,
  };
  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentWillUnmount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  shouldComponentUpdate(nextProps: any, nextState: any) {
    console.log("shouldComponentUpdate");
    return nextState.count < 9;
  }
  getSnapshotBeforeUpdate(prevProps: any, prevState: any) {
    console.log("getSnapshotBeforeUpdate", prevProps, prevState);
    return null;
  }
  render() {
    console.log("render", this);
    const { count } = this.state;
    return (
      <div>
        <Button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          点击
        </Button>
        <div> {count}</div>
      </div>
    );
  }
}
