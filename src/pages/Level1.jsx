import React from 'react'
import Context from './Context'
import {data} from  "./data" 

export default function Level1() {

  const levelNumber = 1


  return (
    <div>
    <div className="levelNumber">  <h2 style={{marginLeft:"20px"}}>Level 1</h2> </div> 
        <Context data={data} levelNumber={levelNumber}/>
        </div>
  )
}
