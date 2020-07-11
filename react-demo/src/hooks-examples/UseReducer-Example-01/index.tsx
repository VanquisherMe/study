import React, { FC, useEffect, useState, useReducer } from "react";
import { Link } from "react-router-dom";
import { Button, List } from "antd";
import { CountContext, Count } from "./Context";
const initialState = { count: 0 };
function reducer(state: { count: number }, action: { type: any }) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const Example: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [memory, setMemory] = useState<string[]>([]);
  useEffect(() => {
    console.log(`enter Example-02`);
    console.log(`You clicked ${state.count} times`);
    setMemory(memory.concat(`You clicked ${state.count} times`));
    return () => {
      console.log(`Unmount:leave Example-02`);
    };
  }, [state]);

  return (
    <div>
      <CountContext.Provider value={state}>
        <Count />
      </CountContext.Provider>
      <Button onClick={() => dispatch({ type: "decrement" })}>-</Button>
      <Button onClick={() => dispatch({ type: "increment" })}>+</Button>
      <List
        bordered
        dataSource={memory}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </div>
  );
};

export default Example;
