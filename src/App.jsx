import { useState,useEffect } from 'react'
import './App.css'
import { featchDataFormApi } from './utils/api'

function App() {
  const apitesting=()=>{
    featchDataFormApi('/movie/popular').then((e)=>{
      console.log(e)
    })
  }
   useEffect(()=>{
    apitesting()
   },[])
  return (
    <>
      <div style={{color:'white'}}>hi</div>
    </>
  )
}

export default App
