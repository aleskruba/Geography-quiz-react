import React from 'react'
import './home.css'
import {Link} from "react-router-dom";

export default function Home() {
  return (
    <div className='main'>
      <div className="starttitle">Welcome to the geography quiz </div>    
      <div className="title1">
        <h4>To get to the next level, you must answer at least ten out of ten questions correctly </h4>
        <h5> You have 30 seconds to answer each question</h5> 
        </div> 
  
      

      <div className="image">

      <img src='https://assets.telegraphindia.com/telegraph/2021/Dec/1639049229_world.jpg' />  
      <Link to="/level1"><div className="start-button"><span>Start Here </span></div> </Link>
      </div>   
    </div>

  )
}