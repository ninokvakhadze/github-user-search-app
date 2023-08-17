import "./App.css";
import sun from "./images/icon-sun.svg";
import moon from "./images/icon-moon.svg";
import profile from "./images/Oval.svg";
import location from "./images/icon-location.svg";
import locationWhite from "./images/locationWhite.svg";
import webpage from "./images/icon-website.svg";
import webpageWhite from "./images/websiteWhite.svg";
import twitter from "./images/icon-twitter.svg";
import twitterWhite from "./images/twitterWhite.svg";
import company from "./images/icon-company.svg";
import companyWhite from "./images/comanyWhite.svg";
import axios from "axios";
import React, {useState, useEffect} from "react";


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
  const defaultUser = "octocat";
  const [inputValue, setInputValue] = useState<string>(defaultUser);
  const [userData, setUserData] = useState<UserData | any>(String);
  const [noResult, setNoResult] = useState(false);
  const [userImage, setUserImage] = useState(false);
  const [colors, setColors] = useState(false);

  useEffect(() => {
    handleSearch();
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  
  const handleSearch = async () => {
    try {
      const response = await axios.get<UserData>(
        `https://api.github.com/users/${inputValue}`
      );
      setUserData(response.data);
      setUserImage(true);
      setNoResult(false);
    } catch (error) {
      setNoResult(true);
    }
  };
  

  const handleOnClick = () => {
    if (colors) {
      setColors(false);
      document.body.style.backgroundColor = "#141d2f";
    } else {
      setColors(true);
      document.body.style.backgroundColor = "#F6F8FF";
    }
  };
  return (
    <div className="App">
      <header>
        <h1 style={colors ? { color: "#222731" } : { color: "" }}>devfinder</h1>
        <div onClick={handleOnClick} className="header-div">
          <h3 style={colors ? { color: "#4b6a9b" } : { color: "" }}>
            {colors ? "DARK" : "LIGHT"}
          </h3>
          <img src={colors ? moon : sun} className="sun-moon" alt="sun" />
        </div>
      </header>
      <div className="input-div">
        <input
          type="text"
          placeholder="Search GitHub username…"
          value={inputValue}
          onChange={handleInputChange}
          className={colors ? "input-light" : ""}
        />
        {noResult === true && <p className="error">No results</p>}
        <button onClick={handleSearch}>Search</button>
      </div>
      <div
        style={
          colors
            ? {
                backgroundColor: "#fefefe",
                boxShadow: "0px 16px 30px -10px rgba(70, 96, 187, 0.2)",
              }
            : { color: "" }
        }
        className="card"
      >
        <div className="image-personal-info">
          <img
            src={userImage ? userData.avatar_url : profile}
            alt="profile"
            className="profile"
          />
          <div className="info">
            <div className="name-username">
              <h4 style={colors ? { color: " #2b3442" } : { color: "" }}>
                {userData.name}
              </h4>
              <a href={userData.html_url}>@{userData.login}</a>
            </div>
            <p
              style={colors ? { color: "#697C9A" } : { color: "" }}
              className="join-date"
            >
              Joined {new Date(userData.created_at).toLocaleDateString()}
            </p>
          </div>
        </div>
        <p
          style={colors ? { color: "#4B6A9B" } : { color: "" }}
          className="text"
        >
          {userData.bio}
        </p>
        <div
          style={
            colors ? { backgroundColor: "#F6F8FF" } : { backgroundColor: "" }
          }
          className="small-card"
        >
          <div className="small-card-component">
            <p
              style={colors ? { color: "#4B6A9B" } : { color: "" }}
              className="title"
            >
              Repos
            </p>
            <p
              className="number"
              style={colors ? { color: "#2B3442" } : { color: "" }}
            >
              {userData.public_repos}
            </p>
          </div>
          <div className="small-card-component">
            <p
              style={colors ? { color: "#4B6A9B" } : { color: "" }}
              className="title"
            >
              Followers
            </p>
            <p
              className="number"
              style={colors ? { color: "#2B3442" } : { color: "" }}
            >
              {userData.followers}
            </p>
          </div>
          <div className="small-card-component">
            <p
              style={colors ? { color: "#4B6A9B" } : { color: "" }}
              className="title"
            >
              Following
            </p>
            <p
              className="number"
              style={colors ? { color: "#2B3442" } : { color: "" }}
            >
              {userData.following}
            </p>
          </div>
        </div>
        <div className="adresses">
          <div className="adress-logo">
            <img
              src={colors ? location : locationWhite}
              style={userData.location ? { opacity: "" } : { opacity: "50%" }}
              alt="logo"
            />
            {userData.location ? (
              <p
                className="adress"
                style={colors ? { color: "#4B6A9B" } : { color: "" }}
              >
                {userData.location}
              </p>
            ) : (
              <p style={colors? {color: ""}: {color:"#FFF"}}className="not-avaliable">Not Available</p>
            )}
          </div>
          <div className="adress-logo">
            <img
              src={colors ? webpage : webpageWhite}
              alt="logo"
              style={userData.blog ? { opacity: "" } : { opacity: "50%" }}
            />
            {userData.blog ? (
              <a
                href={userData.blog}
                className="adress"
                style={colors ? { color: "#4B6A9B" } : { color: "" }}
              >
                {userData.blog}
              </a>
            ) : (
              <p style={colors? {color: ""}: {color:"#FFF"}} className="not-avaliable">Not Available</p>
            )}
          </div>
          <div className="adress-logo">
            <img
              src={colors ? twitter : twitterWhite}
              alt="logo"
              style={
                userData.twitter_username ? { opacity: "" } : { opacity: "50%" }
              }
            />
            {userData.twitter_username ? (
              <a
                href={`https://twitter.com/${userData.twitter_username}`}
                className="adress"
                style={colors ? { color: "#4B6A9B" } : { color: "" }}
              >
                {userData.twitter_username}
              </a>
            ) : (
              <p style={colors? {color: ""}: {color:"#FFF"}} className="not-avaliable">Not Available</p>
            )}
          </div>
          <div className="adress-logo">
            <img
              src={colors ? company : companyWhite}
              alt="logo"
              style={userData.company ? { opacity: "" } : { opacity: "50%" }}
            />
            {userData.company ? (
              <p
                className="adress"
                style={colors ? { color: "#4B6A9B" } : { color: "" }}
              >
                {userData.company}
              </p>
            ) : (
              <p style={colors? {color: ""}: {color:"#FFF"}} className="not-avaliable">Not Available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
