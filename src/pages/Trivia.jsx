import React,{useState,useEffect} from 'react';


import "./trivia.css"



export default function Trivia({data,
                                questions,
                                questionNumber,
                                setQuestions,
                                setClsName,
                                SetClsNameWrong,
                                setSumPoints,
                                setDisableOnlick,
                                setTimers,
                                setquestionNumber,
                                setPoints,
                                sumPoints,
                                disableOnlick,
                                clsName,
                                clsNameWrong,
                                setCircle,
                                selectedAnswer,
                                setSelectedAnswer,
                                setBack,
                                back,
                                setSummaryAnswersList,
                                summaryAnswersList
                  
                            }) {





useEffect(()=>{


  setQuestions(data[questionNumber-1])
  setClsName("answer active")

 
},[data,questionNumber])





const handleClick = (element) => {
      SetClsNameWrong(element)
      setSelectedAnswer(element)
      setClsName(element.correct && 'answer correct')
      setSumPoints([...sumPoints,{
                      id:questionNumber,
                      cls:element.correct ? 'circles': 'circlesWrong',
                      result: element.correct ? '1' : '0',
     }]) 

  setBack([...back, { id:element.correct ? 1: 0}] )

    if (element.correct) {
    
        setDisableOnlick(true)
        setTimers(true)

        setTimeout(() => {
          setDisableOnlick(false)
          setTimers(false)
          setquestionNumber((prev)=>prev + 1)
        }, 500);
        setSelectedAnswer(null)
        setPoints('1')
    } else {
      setSummaryAnswersList([...summaryAnswersList,{question: data[questionNumber-1].question, 
                                                    correctanwer: data[questionNumber-1].correct,
                                               }
     ])  
        setCircle(true)
       setDisableOnlick(true)
       setTimers(true)
       setClsName('answer corrected')
       setTimeout(() => {
           setDisableOnlick(false)
           setTimers(false)
           setquestionNumber((prev)=>prev + 1)
           setCircle(false)
           }, 500);
          setPoints('0')
          setSelectedAnswer(null)
        }
}



  return (

    <div className="trivia">     
        <div className="question">{questions?.question}</div>
        <div className="answers">
        
             {questions?.answers.map( (element,key) =>(


              <React.Fragment key={key}>
                 
            
                {!disableOnlick ? 
     
                
        <div  className={selectedAnswer === element ? clsName: 'answer' }  onClick={ () =>  handleClick(element) }>
                 
         
                   <div >    {element.text}</div></div> 
                 
                  
                  : 
                  
        <div  style={element.correct === false && clsNameWrong === element ? {backgroundColor:'red'}: {color:'white'}} key={key} className={element.correct === true ? clsName: 'answer shadow'} > {element.text} </div>
                  
   
                }   
        
        </React.Fragment>
        )) }

        </div>


      </div>
  )
}