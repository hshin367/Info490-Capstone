import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./searchbar.css";
import "antd/dist/antd.css";

const SearchBar = () => {
  return (
    <div className="searchbar">
      <Input
        placeholder="Search Events"
        bordered={false}
        prefix={
          <SearchOutlined style={{ fontSize: "18px", paddingRight: "5px" }} />
        }
      />
    </div>
  );
};

export default SearchBar;
