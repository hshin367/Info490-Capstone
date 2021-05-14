import { Menu, Dropdown, Modal, Button, Input } from "antd";
import React, { useState } from "react";
import { MoreOutlined } from "@ant-design/icons";
import { unRegisterForEvent, inviteFriend } from "../../actions/actions";
import "./more_detail.css";

const MoreDetails = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [recipient, setRecipient] = useState("");

  const style = () => {
    return <MoreOutlined style={{ fontSize: "25px" }} />;
  };

  const handleRemoveEvent = async () => {
    let eventId = props.event.eventId;
    console.log("clicked remove");
    let response = await unRegisterForEvent(eventId);
    props.handleRemove();
    console.log(response);
  };

  const handleInviteSubmit = async () => {
    let eName = props.event.name;
    let userHandle = recipient;
    let response = await inviteFriend(eName, userHandle);
    alert(response.message);
  };

  const handleInvite = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    handleInviteSubmit();
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
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
        <Input
          placeholder="input user email"
          size="large"
          onChange={(e) => setRecipient(e.target.value)}
        />
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
