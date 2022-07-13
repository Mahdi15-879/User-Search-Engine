import React, { useState } from "react";
import axios from "axios";

// SVG
import Search from "../assets/search.svg";

const Home = () => {
  const LOCAL_STORAGE_KEY = "users";

  const [search, setSearch] = useState();

  const searchHandler = (event) => {
    event.preventDefault();

    axios
      .get(`https://api.github.com/users/${search}`)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

    let new_data = search;
    if (localStorage.getItem(LOCAL_STORAGE_KEY) == null) {
      localStorage.setItem(LOCAL_STORAGE_KEY, "[]");
    }
    let old_data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    old_data.push(new_data);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(old_data));
  };

  return (
    <div className="Home">
      <h1>User Search Engine</h1>
      <form onSubmit={searchHandler}>
        <input
          type="text"
          name="user_search"
          placeholder="Search..."
          onChange={(event) => setSearch(event.target.value)}
        />
        <button type="submit">
          <img src={Search} alt="Search" />
        </button>
      </form>
    </div>
  );
};

export default Home;
