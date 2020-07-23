import React, {
  Component,
  createElement,
  cloneElement,
  createRef,
} from "react";
import { Button } from "antd";

export default class Example extends Component {
  ref: any = createRef();
  ck = () => {
    this.forceUpdate();
  };
  componentDidUpdate(nextProps: any, nextState: any, snapshot: any) {
    console.log("componentDidUpdate", snapshot);
  }
  shouldComponentUpdate(nextProps: any, nextState: any) {
    console.log("shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps: any, prevState: any) {
    console.log("getSnapshotBeforeUpdate", prevProps, prevState);
    return 222;
  }
  render() {
    console.log("render");
    return (
      <div onClick={this.ck} ref={this.ref}>
        11111
      </div>
    );
  }
}
