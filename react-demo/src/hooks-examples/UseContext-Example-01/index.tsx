import React, { FC, useEffect, useState, useReducer } from "react";
import { Link } from "react-router-dom";
import { Button, List } from "antd";
import { CountContext, Count } from "./Context";
const Example: FC = () => {
  // Similar to componentDidMount and componentDidUpdate:
  const [count, setCount] = useState<number>(0);
  const [memory, setMemory] = useState<string[]>([]);

  useEffect(() => {
    console.log(`enter Example-02`);
    console.log(`You clicked ${count} times`);
    setMemory(memory.concat(`You clicked ${count} times`));
    return () => {
      console.log(`leave Example-02`);
    };
  }, [count]);

  return (
    <div>
      <CountContext.Provider value={count}>
        <Count />
      </CountContext.Provider>
      <Button onClick={() => setCount(count + 1)}>Click me</Button>
      <List
        bordered
        dataSource={memory}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </div>
  );
};

export default Example;
