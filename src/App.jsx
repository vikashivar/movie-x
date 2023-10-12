import { useState,useEffect } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { getApiConfiguration } from './store/homeslice'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import PageNotFound from './pages/404/pageNotFound'
import Details from './pages/details/details'
import Home from './pages/home/Home'
import SearchResult from './pages/searchResult/SearchResult'
import Explore from './pages/explore/Explore'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { fetchDataFromApi } from './utils/api'






function App() {
  const dispatch =useDispatch()

  useEffect(()=>{
    fetchApiConfig()
  },[])

  const fetchApiConfig=()=>{
      fetchDataFromApi('/configuration').then((res)=>{
        const url ={
          backdrop:res.images.secure_base_url +'original', 
          poster:res.images.secure_base_url +'original', 
          profile:res.images.secure_base_url +'original', 

        }
             dispatch(getApiConfiguration(url))
      })
  }
  
   
  
   
  return (
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/:mediaType/:id' element={<Details></Details>}></Route>
      <Route path='/search/:query' element={<SearchResult></SearchResult>}></Route>
      <Route path='/explore/:mediaType' element={<Explore></Explore>}></Route>
      <Route path='*' element={<PageNotFound></PageNotFound>}></Route>

    
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
