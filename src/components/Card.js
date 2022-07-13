import React from "react";

// Styles
import "./Card.css";

const Card = ({ name, avatar, bio, repos }) => {
  return (
    <div className="Card">
      <div className="Card-content">
        <div className="Card__header">
          <div className="Card__header-img">
            <img src={avatar} alt="User Avatar" />
          </div>

          <div className="Card__header-body">
            <h2>{name}</h2>
            <p>{bio}</p>
          </div>
        </div>

        <h3>Repositories</h3>
        {repos}
      </div>
    </div>
  );
};

export default Card;
