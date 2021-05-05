import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./searchbar.css";
import "antd/dist/antd.css";

const FriendSearchBar = ({ handleChange }) => {
  const onChange = (e) => {
    handleChange(e.target.value);
  };

  return (
    <div className="friendsearchbar">
      <Input
        placeholder="Search Friends"
        bordered={false}
        onChange={onChange}
        prefix={
          <SearchOutlined style={{ fontSize: "18px", paddingRight: "5px" }} />
        }
      />
    </div>
  );
};

export default FriendSearchBar;
