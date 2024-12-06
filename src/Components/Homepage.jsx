import React from 'react';
import '../Styles/Homepage.css';
import Search from '../Images/Search.png';
import Group from '../Images/Group.png';
import Group15 from '../Images/Group15.png';
import Vector from '../Images/Vector.png';
import Rectangle38 from '../Images/Rectangle38.png';
import Rectangle40 from '../Images/Rectangle40.png';
import Rectangle41 from '../Images/Rectangle41.png';
import Rectangle42 from '../Images/Rectangle42.png';
import Rectangle43 from '../Images/Rectangle43.png';

const Homepage = () => {
  return (
    <div className="homepage-container">
      <form className="d-flex">
        <input className="form-control" type="search" placeholder="Search for song" />
        <button className="btn-outline-success" type="submit">
          <img className="search-img" src={Search} alt="Search" />
        </button>
        <button className="signup">Sign Up</button>
        <button className="login">Login</button>
      </form>

      <div className="container">
        <aside className="sidebar">
          <nav className="menu">
            <ul>
              <li><button className="menu-item"><img className="icons-display" src={Group} alt="home" />Home</button></li>
              <li><button className="menu-item"><img className="icons-display" src={Group15} alt="browse" />Browse</button></li>
              <li><button className="menu-item"><img className="icons-display" src={Vector} alt="playlists" />Playlists</button></li>
            </ul>
          </nav>
        </aside>

        <div className="slidebar">
          <div className="image-slider">
            <div className="slider-div">
              <img src={Rectangle38} alt="Slide 1" className="img" />
            </div>
            <div className="slider-div">
              <img src={Rectangle40} alt="Slide 2" className="img" />
            </div>
            <div className="slider-div">
              <img src={Rectangle41} alt="Slide 3" className="img" />
            </div>
            <div className="slider-div">
              <img src={Rectangle42} alt="Slide 4" className="img" />
            </div>
            <div className="slider-div">
              <img src={Rectangle43} alt="Slide 5" className="img" />
            </div>
          </div>
        </div>
      </div>

      <section className="categories">
        <div className="home-heading">
          <h2>Popular Songs</h2>
          <a href="/popular-songs">View all</a>
        </div>
        <div className="content">
          {/* Add more song components here */}
        </div>
      </section>
    </div>
  );
};

export default Homepage;
