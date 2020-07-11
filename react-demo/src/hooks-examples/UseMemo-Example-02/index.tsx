import React, { FC, useState, useMemo } from "react";
import { Button } from "antd";
import dayjs from "dayjs";

const a = "张三";
const b = "李四";
const Example: FC = () => {
  const [state, setState] = useState({ a, b });

  const setZhangsan = () => {
    setState({
      ...state,
      a: `${a}-${dayjs().format("YYYY-MM-DD HH:mm:ss")}`,
    });
  };

  const setLisi = () => {
    setState({
      ...state,
      b: `${b}-${dayjs().format("YYYY-MM-DD HH:mm:ss")}`,
    });
  };
  //监听是否变化
  const memoizedState = useMemo(() => {
    return state;
  }, [state.a]);

  return (
    <div>
      <Button onClick={setZhangsan}>张三</Button>
      <Button onClick={setLisi}>李四</Button>

      <div>{memoizedState.a}</div>
      <div>{memoizedState.b}</div>
    </div>
  );
};

export default Example;
