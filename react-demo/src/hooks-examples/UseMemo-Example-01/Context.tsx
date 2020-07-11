import React, { FC, createContext, useContext } from "react";

export const CountContext = createContext({ count: 0 });

export const Count: FC = () => {
  const state = useContext(CountContext);
  return <div>CountContext:{state.count}</div>;
};
