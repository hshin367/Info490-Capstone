import { Menu, Dropdown, Modal, Button, Input } from "antd";
import React, { useState } from "react";
import { MoreOutlined } from "@ant-design/icons";
import { unRegisterForEvent } from "../../actions/actions";
import "./more_detail.css";

const MoreDetails = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const style = () => {
    return <MoreOutlined style={{ fontSize: "25px" }} />;
  };

  const handleRemoveEvent = async () => {
    console.log("clicked remove");
    let response = await unRegisterForEvent();
    console.log(response);
  };

  const handleInvite = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    alert("sent invitation");
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleInviteSubmit = (e) => console.log(e);

  const menuContent = (
    <>
      <Menu.Item
        key="0"
        className="more-detail-dropdown"
        onClick={() => props.handleRemove(props.event)}
      >
        Remove Event
      </Menu.Item>
      <Menu.Item
        key="1"
        className="more-detail-dropdown"
        onClick={handleInvite}
      >
        Invite Friends
      </Menu.Item>
      <Modal
        title="Send out an Invite"
        okText="Send"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>
          Enter the email address of the person that you want to invite to the
          event
        </p>
        <Input placeholder="input user email" size="large" />
      </Modal>
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
