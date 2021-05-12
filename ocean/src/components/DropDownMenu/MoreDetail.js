import { Menu, Dropdown, message } from "antd";
import React from "react";
import { MoreOutlined } from "@ant-design/icons";
import { DownOutlined } from "@ant-design/icons";
import "./more_detail.css";

const MoreDetails = (props) => {
  const menuContent = props.text.map((menuItem, ind) => {
    return <Menu.Item key={ind}>{menuItem}</Menu.Item>;
  });

  const style = () => {
    if (props.style === "dot") {
      return <MoreOutlined style={{ fontSize: "25px" }} />;
    } else if (props.style === "arrow") {
      return <DownOutlined />;
    } else {
      return <DownOutlined />;
    }
  };

  const menu = <Menu>{menuContent}</Menu>;

  return (
    <>
      <Dropdown
        overlay={menu}
        trigger={["click"]}
        onClick={(e) => e.preventDefault()}
      >
        {style()}
      </Dropdown>
    </>
  );
};

export default MoreDetails;
