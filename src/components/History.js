import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

// Styles
import "./History.css";

const History = () => {
  const LOCAL_STORAGE_KEY = "users";

  const [usersList, setUsersList] = useState();

  useEffect(() => {
    setUsersList(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)).reverse());
  }, []);

  return (
    <div className="History">
      {usersList &&
        usersList.map((user) => (
          <div key={uuidv4()}>
            <Link to={`/history/${user}`}>{user}</Link>
          </div>
        ))}
    </div>
  );
};

export default History;
