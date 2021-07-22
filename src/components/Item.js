/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Item = ({ heading, description }) => {
  return (
    <div className="item">
      <i className="large github middle aligned icon"></i>
      <div className="content">
        <a href="#" className="header">
          {heading}
        </a>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default Item;
