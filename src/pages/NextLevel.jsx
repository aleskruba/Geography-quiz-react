import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './nextlevel.css'



export default function NextLevel({setAuth,nextlevel,totalPoints,data,newGamehandler,summaryAnswersList,levelNumber,setBack}) {


  function nextlevel(){
  
    newGamehandler() 
    setBack([])

  }

 
  function levelagain() {
  
    newGamehandler() 
    setBack([])

  }


    return (
     <div className='levelpageDOWNWELL'>


     

                <div className='results'>
                
       
                  {levelNumber==1 &&  totalPoints  <=7 ? 
                  
                  <><h4>You anwered {totalPoints} out of  {data.length} correctly , it's not a very good result </h4>
                    <h4>You need at least 7 correct answers to reach level 2</h4>
                    
                    <div className='LinkToNextLevel'>
                         <Link to='/level1' className='link'>
                         <h3 onClick={levelagain}>Click here to try it again </h3> 
                        </Link>
                    </div>
                  </> :
                 <> <h4>You anwered {totalPoints} out of  {data.length} correctly </h4> </> }
         
              {totalPoints < 10 &&  <h4>Bellow you can see corrected answers</h4> }
                </div>
                
                  

                {levelNumber==1 && totalPoints > 7 &&      
 
                 <Link to='/level2' className='link'>
                  <div className='LinkToNextLevel'><h3 onClick={nextlevel} >Click here to Level 2</h3></div>
                   
                    </Link>
               }
          {levelNumber==2 &&
        <div className='thankDiv'>
          <div className='thanks'>
         <h4>Thank you for trying this quiz</h4>
          </div>
          
          <div>
            <img className='picture' src="https://pngimg.com/uploads/parrot/parrot_PNG96591.png" alt=""  />
          </div>
        </div>}
                {summaryAnswersList.map( (element,key)=> (
          <div key={key}    style={{background: 'wheat',marginLeft:'30px',marginRight:'550px', paddingTop:'5px',fontSize:'25px'}}>
            <h5 style={{color:'black',marginLeft:'20px',marginTop:'5px', paddingTop:'5px',backgroundColor:"lightgray", marginRight:'20px', width:'550px',marginBottom:'4px',padding:'5px',borderRadius:'5px'}}>{element.question}</h5>
            <h4 style={{color:'red',marginLeft:'20px',marginBottom:'20px',paddingRight:'15px',paddingBottom:'15px'}}>{element.correctanwer}</h4>  
       
          </div>
          
          )
        )}


        </div>         

  )
}
