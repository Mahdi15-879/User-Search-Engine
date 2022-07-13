import React, { useState } from "react";
import axios from "axios";

// Components
import Card from "./Card";

// Styles
import "./Home.css";

// SVG
import Search from "../assets/search.svg";

const Home = () => {
  const LOCAL_STORAGE_KEY = "users";

  const [search, setSearch] = useState();
  const [userName, setUserName] = useState();
  const [avatarURL, setAvatarURL] = useState();
  const [userBio, setUserBio] = useState();
  const [repos, setRepos] = useState();

  const searchHandler = (event) => {
    event.preventDefault();

    axios
      .get(`https://api.github.com/users/${search}`)
      .then((response) => {
        setUserName(response.data.name);
        setAvatarURL(response.data.avatar_url);
        setUserBio(response.data.bio);
      })
      .catch((error) => console.log(error));

    axios
      .get(`https://api.github.com/users/${search}/repos`)
      .then((response) => {
        const list = response.data.map((repo) => (
          <div className="Card__body" key={repo.name}>
            <a href={repo.svn_url} target="blank">
              {repo.name}
            </a>
          </div>
        ));

        setRepos(list);
      })
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

      {userName && (
        <Card name={userName} avatar={avatarURL} bio={userBio} repos={repos} />
      )}
    </div>
  );
};

export default Home;
