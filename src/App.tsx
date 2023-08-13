import "./App.css";
import sun from "./images/icon-sun.svg";
import profile from "./images/Oval.svg";
import location from "./images/icon-location.svg";
import webpage from "./images/icon-website.svg";
import twitter from "./images/icon-twitter.svg";
import company from "./images/icon-company.svg";
function App() {
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
        <input type="text" placeholder="Search GitHub username…" />
        <button>Search</button>
      </div>
      <div className="card">
        <div className="image-personal-info">
          <img src={profile} alt="profile" className="profile"/>
          <div className="info">
            <div className="name-username">
              <h4>The Octocat</h4>
              <a href="#">@octocat</a>
            </div>
            <p className="join-date">Joined 25 Jan 2011</p>
          </div>
        </div>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
        </p>
        <div className="small-card">
          <div className="small-card-component">
            <p className="title">Repos</p>
            <p className="number">8</p>
          </div>
          <div className="small-card-component">
            <p className="title">Repos</p>
            <p className="number">3938</p>
          </div>
          <div className="small-card-component">
            <p className="title">Followers</p>
            <p className="number">9</p>
          </div>
        </div>
        <div className="adresses">
          <div className="adress-logo">
            <img src={location} alt="logo" />
            <p className="adress">San Francisco</p>
          </div>
          <div className="adress-logo">
            <img src={webpage} alt="logo" />
            <p className="adress">https://github.blog</p>
          </div>
          <div className="adress-logo">
            <img src={twitter} alt="logo" />
            <p className="adress">Not Available</p>
          </div>
          <div className="adress-logo">
            <img src={company} alt="logo" />
            <p className="adress">@github</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
