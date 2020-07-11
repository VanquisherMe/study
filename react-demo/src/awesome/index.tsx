import React, { FC } from "react";
import { List, Typography, Divider } from "antd";
const data = [
  {
    component: "path-to-regexp",
    description:"匹配路由规则",
    tags:['route']
  },
];
const Awesome: FC = () => (
  <div>
    <List
      header={<div>路由</div>}
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Typography.Text mark>{item.component}</Typography.Text>
          {item.description}
        </List.Item>
      )}
    />
  </div>
);
export default Awesome;
