import React from "react";
import moment from "moment";
import "./Header.css";

const HeaderTitle = () => {
  return (
    <div className="header-title">
      <h3>Lambda School</h3>
      <h4>@LambdaSchool - {moment().format("ll")}</h4>
    </div>
  );
};

export default HeaderTitle;
