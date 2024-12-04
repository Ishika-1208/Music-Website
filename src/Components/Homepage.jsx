import React from 'react'
import '../Styles/Homepage.css'
import Search from '../Images/Search.png'
import person from '../Images/person.png'
import Group from '../Images/Group.png'
import Group15 from '../Images/Group15.png'
import Vector from '../Images/Vector.png'
import Rectangle38 from '../Images/Rectangle38.png'
import Rectangle40 from '../Images/Rectangle40.png'
import Rectangle41 from '../Images/Rectangle41.png'
import Rectangle42 from '../Images/Rectangle42.png'
import Rectangle43 from '../Images/Rectangle43.png'



const Homepage = () => {
  return (
    <>
    {/* <form className="d-flex" role="search">
        <input className="form-control" type="search" placeholder="Search" />
        <button className="btn-outline-success" type="submit"><img src={Search} alt="Search" /></button>
      </form> */}
       <div className="container">
    <aside className="sidebar">
      <nav className="menu">
        <ul>
       <li> <a href="#" className="menu-item"><img className='icons-display' src={Group} alt="home" />Home</a></li>
       <li> <a href="#" className="menu-item"><img className='icons-display' src={Group15} alt="browse" />Browse</a></li>
       <li> <a href="#" className="menu-item"><img className='icons-display' src={person} alt="Artists" />Artists</a></li>
       <li> <a href="#" className="menu-item"><img className='icons-display' src={Vector} alt="playlists" />Playlists</a></li>
        </ul>
      </nav>
    </aside>

    <div className="slidebar">
      <span className="slider-span" id='slide-span1'></span>
      <span className="slider-span" id='slide-span2'></span>
      <span className="slider-span" id='slide-span3'></span>
      <span className="slider-span" id='slide-span4'></span>
      <span className="slider-span" id='slide-span5'></span>

    
     <div className="image-slider">
      <div className="slider-div" id="slider-span1">
        <img src={Rectangle38} alt="" className="img" id='img1'/>
        <a href="#slider-span1" className="button" id='button-1'></a>
        </div>
      <div className="slider-div" id="slider-span2">
        <img src={Rectangle40} alt="" className="img"  id='img2'/>
        <a href="#slider-span2" className="button" id='button-2'></a>
        </div>
      <div className="slider-div" id="slider-span3">
        <img src={Rectangle41} alt="" className="img"  id='img3'/>
        <a href="#slider-span3" className="button" id='button-3'></a>
        </div>
      <div className="slider-div" id="slider-span4">
        <img src={Rectangle42} alt="" className="img"  id='img4'/>
        <a href="#slider-span4" className="button" id='button-4'></a>
        </div>
      <div className="slider-div" id="slider-span5">
        <img src={Rectangle43} alt="" className="img"  id='img5'/>
        <a href="#slider-span5" className="button" id='button-5'></a>
        </div>
      </div>
    </div>

    {/* <main className="main-content">
      <header className="top-bar">
        <div className="search-bar">
          <input type="text" placeholder="Search for a song"/>
          <button>🔍</button>
        </div>
        <div className="auth-buttons">
          <button className="btn sign-up">Sign up</button>
          <button className="btn login">Login</button>
        </div>
      </header>

      <section className="featured">
        <h3>Featured Songs</h3>
        <div className="featured-content">
          <div className="featured-item">[Cover Art]</div>
        </div>
      </section>

      <section className="popular-songs">
        <h3>Popular Songs</h3>
        <div className="song-grid">
          <div className="song-card">Ve Kamleya</div>
          <div className="song-card">O Saathi</div>
          <div className="song-card">Jatt Mehka</div>
          <div className="song-card">Levitating</div>
        </div>
      </section> 

      <section className="popular-albums">
        <h3>Popular Albums</h3>
        <div className="album-grid">
          <div className="album-card">Glory</div>
          <div className="album-card">Making Memories</div>
          <div className="album-card">Aashiqui 2</div>
          <div className="album-card">Ek Tha Raja</div>
        </div>
      </section> 
    </main>*/}
    </div>
    </>
  )
}

export default Homepage