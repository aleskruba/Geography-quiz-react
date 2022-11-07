import React from 'react'
import Context from './Context'
import {data1 as data} from  "./data" 

export default function Level2() {
  
  const levelNumber = 2


  return (
    <div>
       <div className="levelNumber">  <h2 style={{marginLeft:"20px"}}>Level 2</h2> </div> 
      <Context data={data} levelNumber={levelNumber }/>
      
      </div>
  )
}
