import "./App.css";
import sun from "./images/icon-sun.svg";
import profile from "./images/Oval.svg";
import location from "./images/icon-location.svg";
import webpage from "./images/icon-website.svg";
import twitter from "./images/icon-twitter.svg";
import company from "./images/icon-company.svg";
import React, { useState } from "react";
import axios from "axios";

interface UserData {
  login: string;
  name: string;
  avatar_url: string;
  created_at: string;
  bio: string;
  public_repos: number; 
  followers: number; 
  following: number;
  location: string;
  company: string; 
  twitter_username: string; 
  blog: string;
  html_url: string;
}

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [userData, setUserData] = useState<UserData | any>(String);
  const [userImage, setUserImage] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get<UserData>(
        `https://api.github.com/users/${inputValue}`
      );
      setUserData(response.data);
      setUserImage(true)
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  return (
    <div className="App">
      <header>
        <h1>devfinder</h1>
        <div className="header-div">
          <h3>Light</h3>
          <img src={sun} className="sun-moon" alt="sun" />
        </div>
      </header>
      <div className="input-div">
        <input
          type="text"
          placeholder="Search GitHub username…"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="card">
        <div className="image-personal-info">
          <img src={userImage? userData.avatar_url: profile} alt="profile" className="profile" />
          <div className="info">
            <div className="name-username">
              <h4>{userData.name}</h4>
              <a href={userData.html_url}>@{userData.login}</a>
            </div>
            <p className="join-date">Joined {new Date(userData.created_at).toLocaleDateString()}</p>
          </div>
        </div>
         <p className="text">
         {userData.bio}.
        </p> 
        <div className="small-card">
          <div className="small-card-component">
            <p className="title">Repos</p>
            <p className="number">{userData.public_repos}</p>
          </div>
          <div className="small-card-component">
            <p className="title">Followers</p>
            <p className="number">{userData.followers}</p>
          </div>
          <div className="small-card-component">
            <p className="title">Following</p>
            <p className="number">{userData.following}</p>
          </div>
        </div>
        <div className="adresses">
          <div className="adress-logo">
            <img src={location} alt="logo" />
            <p className="adress">{userData.location}</p>
          </div>
          <div className="adress-logo">
            <img src={webpage} alt="logo" />
            <p className="adress">{userData.blog}</p>
          </div>
          <div className="adress-logo">
            <img src={twitter} alt="logo" />
            <p className="adress">{userData.twitter_username}</p>
          </div>
          <div className="adress-logo">
            <img src={company} alt="logo" />
            <p className="adress">{userData.company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
