import { Menu, Dropdown, message } from "antd";
import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import "./account_dropdown.css";

const AccountDropdown = (props) => {
  let user = JSON.parse(localStorage.getItem("user-info"));

  const history = useHistory();

  function logout() {
    alert("logging out");
    // console.log("loggin out");
    localStorage.clear();
    history.push({ pathname: "/login" });
  }

  const menuContent = (
    <>
      <Menu.Item key="0">Tank Settings</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1" onClick={logout}>
        {localStorage.getItem("user-info") ? "Log Out" : null}
      </Menu.Item>
    </>
  );

  const menu = <Menu>{menuContent}</Menu>;

  return (
    <>
      <Dropdown
        overlay={menu}
        trigger={["click"]}
        // onClick={props.}
      >
        <div className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          {props.children}

          <DownOutlined />
        </div>
      </Dropdown>
    </>
  );
};

export default AccountDropdown;
