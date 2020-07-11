import React, { FC, createContext, useContext } from "react";

export const CountContext = createContext(100);

export const Count: FC = () => {
  const count = useContext(CountContext);
  return <div>CountContext:{count}</div>;
};
