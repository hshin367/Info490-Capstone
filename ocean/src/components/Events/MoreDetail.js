import { Menu, Dropdown, message } from "antd";
import React from "react";
import { MoreOutlined } from "@ant-design/icons";
import "./more_detail.css";

const MoreDetails = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1">Remove Event</Menu.Item>
      <Menu.Item key="2">Invite Friends</Menu.Item>
    </Menu>
  );

  return (
    <>
      <Dropdown
        overlay={menu}
        trigger={["click"]}
        onClick={(e) => e.preventDefault()}
      >
        <MoreOutlined style={{ fontSize: "25px" }} />
      </Dropdown>
    </>
  );
};

export default MoreDetails;
