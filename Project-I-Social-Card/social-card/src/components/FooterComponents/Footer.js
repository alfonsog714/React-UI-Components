import React from "react";
import ChatIcon from "./ChatIcon";
import Retweet from "./Retweet";
import LikeIcon from "./LikeIcon";
import ShareIcon from "./ShareIcon";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <ChatIcon />
      <Retweet />
      <LikeIcon />
      <ShareIcon />
    </div>
  );
};

export default Footer;
