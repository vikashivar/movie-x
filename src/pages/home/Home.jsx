import React from 'react'
import HeroBanner from './heroBanner/heroBanner'
import "./style.scss";
import Trending from './trending/Trending';
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated';

const Home = () => {
  return (
    <div className='homepage' >
    
     <HeroBanner></HeroBanner>
     <Trending></Trending>
     <Popular></Popular>
     <TopRated></TopRated>
     

    </div>
  )
}

export default Home
