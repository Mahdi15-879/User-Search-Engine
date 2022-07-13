import React from "react";

const Card = ({ name, avatar, bio, repos }) => {
  return (
    <div className="Card">
      <div className="Card__header">
        <div className="Card__header-img">
          <img src={avatar} alt="User Avatar" />
        </div>

        <div className="Card__header-body">
          <h2>{name}</h2>
          <p>{bio}</p>
        </div>
      </div>

      {repos}
    </div>
  );
};

export default Card;
