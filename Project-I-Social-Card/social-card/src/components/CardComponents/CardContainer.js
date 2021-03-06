import React from "react";
import "./Card.css";
import CardContent from "./CardContent";
import CardBanner from "./CardBanner";

const CardContainer = () => {
  return (
    <div className="card-container">
      <a
        href="https://www.reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        <CardBanner />
        <CardContent />
      </a>
    </div>
  );
};

export default CardContainer;
