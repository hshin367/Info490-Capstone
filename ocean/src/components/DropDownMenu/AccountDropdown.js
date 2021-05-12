import { Menu, Dropdown, message } from "antd";
import React, { useState, useEffect } from "react";
import { DownOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { Checkbox } from "antd";
import "./account_dropdown.css";

const AccountDropdown = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [lightChecked, setLightChecked] = useState(true);
  const [darkChecked, setDarkChecked] = useState(false);
  const history = useHistory();

  useEffect(() => {
    let theme = props.bgCol;

    if (theme === "light") {
      setLightChecked(true);
      setDarkChecked(false);
    } else {
      setDarkChecked(true);
      setLightChecked(false);
    }
  }, []);

  const onDarkClick = () => {
    setDarkChecked(true);
    setLightChecked(false);
    props.toggleTheme("dark");
  };

  const onLightClick = () => {
    setDarkChecked(false);
    setLightChecked(true);
    props.toggleTheme("light");
  };

  const logout = () => {
    alert("logging out");
    localStorage.clear();
    history.push({ pathname: "/login" });
  };

  const handleMenuClick = (e) => {
    if (e.key === "2") setIsVisible(false);
  };

  const handleVisibleChange = (flag) => {
    setIsVisible(flag);
  };

  const menuContent = (
    <>
      <Menu.Item key="0" className="tank-setting">
        Tank Settings
      </Menu.Item>
      <Menu.Item key="1" className="tank-setting">
        <Checkbox
          className="dark"
          checked={darkChecked}
          onChange={onDarkClick}
        />
        <Checkbox
          className="light"
          checked={lightChecked}
          onChange={onLightClick}
        />
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="2" onClick={logout}>
        {localStorage.getItem("user-info") ? "Log Out" : null}
      </Menu.Item>
    </>
  );

  const menu = <Menu onClick={handleMenuClick}>{menuContent}</Menu>;

  return (
    <>
      <Dropdown
        overlay={menu}
        trigger={["click"]}
        visible={isVisible}
        onVisibleChange={handleVisibleChange}
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
