import { Menu, Dropdown } from "antd";
import React from "react";
import { MoreOutlined } from "@ant-design/icons";
import { unRegisterForEvent } from "../../actions/actions";
import "./more_detail.css";

const MoreDetails = (props) => {
  const style = () => {
    return <MoreOutlined style={{ fontSize: "25px" }} />;
  };

  const handleRemoveEvent = async () => {
    console.log("clicked remove");
    let response = await unRegisterForEvent();
    console.log(response);
  };

  const menuContent = (
    <>
      <Menu.Item
        key="0"
        className="more-detail-dropdown"
        onClick={handleRemoveEvent}
      >
        Remove Event
      </Menu.Item>
      <Menu.Item key="1" className="more-detail-dropdown">
        Invite Friends
      </Menu.Item>
    </>
  );

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
