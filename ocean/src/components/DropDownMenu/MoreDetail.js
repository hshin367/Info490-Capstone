import { Menu, Dropdown } from "antd";
import React from "react";
import { MoreOutlined } from "@ant-design/icons";
import "./more_detail.css";

const MoreDetails = (props) => {
  const menuContent = props.text.map((menuItem, ind) => {
    return <Menu.Item key={ind}>{menuItem}</Menu.Item>;
  });

  const style = () => {
    return <MoreOutlined style={{ fontSize: "25px" }} />;
  };

  const menu = <Menu className="more-detail-dropdown">{menuContent}</Menu>;

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
