// import React from 'react'
// import '../Styles/Homepage.css'
// // import Search from '../Images/Search.png'
// // import Group from '../Images/Group.png'
// // import Group15 from '../Images/Group15.png'
// // import Vector from '../Images/Vector.png'
// // import Rectangle38 from '../Images/Rectangle38.png'
// // import Rectangle40 from '../Images/Rectangle40.png'
// // import Rectangle41 from '../Images/Rectangle41.png'
// // import Rectangle42 from '../Images/Rectangle42.png'
// // import Rectangle43 from '../Images/Rectangle43.png'



// // const Homepage = () => {
// //   return (
// //     <>
// //     <form className="d-flex">
// //         <input className="form-control" type="search" placeholder="Search for song" />
// //         <button className="btn-outline-success" type="submit"><img className="search-img"src={Search} alt="Search" /></button>
// //         <button className="signup">Sign Up</button>
// //         <button className="login">Login</button>
// //     </form>

// //        <div className="container">

// //     <aside className="sidebar">
// //       <nav className="menu">
// //         <ul>
// //        <li> <button className="menu-item"><img className='icons-display' src={Group} alt="home" />Home</button></li>
// //        <li> <button className="menu-item"><img className='icons-display' src={Group15} alt="browse" />Browse</button></li>
// //        <li> <button className="menu-item"><img className='icons-display' src={Vector} alt="playlists" />Playlists</button></li>
// //         </ul>
// //       </nav>
// //     </aside>

// //     <div className="slidebar">
// //       <span className="slider-span" id='slide-span1'></span>
// //       <span className="slider-span" id='slide-span2'></span>
// //       <span className="slider-span" id='slide-span3'></span>
// //       <span className="slider-span" id='slide-span4'></span>
// //       <span className="slider-span" id='slide-span5'></span>

    
// //      <div className="image-slider">
// //       <div className="slider-div" id="slider-span1">
// //         <img src={Rectangle38} alt="" className="img" id='img1'/>
// //         <a href="#slider-span1" className="button" id='button-1'></a>
// //         </div>
// //       <div className="slider-div" id="slider-span2">
// //         <img src={Rectangle40} alt="" className="img"  id='img2'/>
// //         <a href="#slider-span2" className="button" id='button-2'></a>
// //         </div>
// //       <div className="slider-div" id="slider-span3">
// //         <img src={Rectangle41} alt="" className="img"  id='img3'/>
// //         <a href="#slider-span3" className="button" id='button-3'></a>
// //         </div>
// //       <div className="slider-div" id="slider-span4">
// //         <img src={Rectangle42} alt="" className="img"  id='img4'/>
// //         <a href="#slider-span4" className="button" id='button-4'></a>
// //         </div>
// //       <div className="slider-div" id="slider-span5">
// //         <img src={Rectangle43} alt="" className="img"  id='img5'/>
// //         <a href="#slider-span5" className="button" id='button-5'></a>
// //         </div>
// //       </div>
// //     </div>
// //     </div>

// //     <section className="categories">
// //       <div className="home-heading">
// //         <h2>Popular Songs</h2>
// //         <a href="/popular-songs">View all</a>
// //       </div>

// //       <div className="content">
// //         <div className="popular-songs">
// //           <img src="" alt="" />
// //           <div className="fea-text">
// //             <p>Ve Kamleya</p>
// //             <p>Arijit Singh</p>
// //           </div>
// //           </div>

// //           <div className="popular-songs">
// //           <img src="" alt="" />
// //           <div className="fea-text">
// //             <p>Ve Kamleya</p>
// //             <p>Arijit Singh</p>
// //           </div>
// //           </div>

// //           <div className="popular-songs">
// //           <img src="" alt="" />
// //           <div className="fea-text">
// //             <p>Ve Kamleya</p>
// //             <p>Arijit Singh</p>
// //           </div>
// //           </div>

// //           <div className="popular-songs">
// //           <img src="" alt="" />
// //           <div className="fea-text">
// //             <p>Ve Kamleya</p>
// //             <p>Arijit Singh</p>
// //           </div>
// //           </div>
// //     </div>
// //     </section>
// //     </>
// //   )
// // }

// // export default Homepage
import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import AlbumSlider from "./AlbumSlider";
import PopularSongs from "./PopularSongs";
// import "./Home.css"; // Make sure to style this page if needed

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="main-content">
        <Header />
        <AlbumSlider />
        <PopularSongs />
      </div>
    </div>
  );
};

export default Home;
