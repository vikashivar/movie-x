import React from 'react'
import HeroBanner from './heroBanner/heroBanner'
import "./style.scss";
import Trending from './trending/Trending';

const Home = () => {
  return (
    <div className='homepage' >
    
     <HeroBanner></HeroBanner>
     <Trending></Trending>
     <div style={{height:'1000px'}}></div>

    </div>
  )
}

export default Home
