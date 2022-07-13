import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// Components
import Card from "./Card";

const HistorySearch = () => {
  const params = useParams();
  const id = params.id;

  const [userName, setUserName] = useState();
  const [avatarURL, setAvatarURL] = useState();
  const [userBio, setUserBio] = useState();
  const [repos, setRepos] = useState();

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${id}`)
      .then((response) => {
        setUserName(response.data.name);
        setAvatarURL(response.data.avatar_url);
        setUserBio(response.data.bio);
      })
      .catch((error) => console.log(error));

    axios
      .get(`https://api.github.com/users/${id}/repos`)
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
  }, []);

  return (
    <div className="HistorySearch">
      {userName && (
        <Card name={userName} avatar={avatarURL} bio={userBio} repos={repos} />
      )}
    </div>
  );
};

export default HistorySearch;
