import React,{useState, useEffect,useMemo} from 'react'
import './level.css'
import Trivia from './Trivia';
import Timer from './Timer';
import NextLevel from './NextLevel';
import { auth } from './PrivateRoutes';





export default function Context({data,levelNumber}) {




  const moneyPyramide = useMemo( ()=>
    [ 
      {id:1, question: data[0]},
      {id:2, question: data[1]},
      {id:3, question: data[2]},
      {id:4, question: data[3]},
      {id:5, question: data[4]},
      {id:6, question: data[5]},
      {id:7, question: data[6]},
      {id:8, question: data[7]},
      {id:9, question: data[8]},
      {id:10,question: data[9]} ]
     ,[])

  


    const [disableOnlick,setDisableOnlick] = useState(false)
    const [questions,setQuestions] = useState(null)
    const [clsName,setClsName] = useState('answer')
    const [questionNumber,setquestionNumber] = useState(1)
    const [clsNameWrong,SetClsNameWrong] = useState("circlesWrong") 
    const [sumPoints,setSumPoints] = useState([])
    const [timers,setTimers] = useState(false)
    const [points,setPoints] = useState(null)
    const [circle,setCircle] = useState(false)
    const [earned,setEarned] = useState("")  
    const [endLevel,setendLevel] = useState(false) 
    const [selectedAnswer,setSelectedAnswer] = useState(null)
    const [stop,setStop] =useState(false)
    const [level2,setLevel2] = useState(false)
    const [back,setBack] = useState([])
    const [summaryAnswersList,setSummaryAnswersList] = useState([])



    const limit = () => {
      setSummaryAnswersList([...summaryAnswersList,{question: data[questionNumber-1].question, 
        correctanwer: data[questionNumber-1].correct,
   }
])
      setBack([...back, { id: 0}] )
      setDisableOnlick(true)
      setClsName('answer corrected')
      setTimeout(()=>{
        setClsName('answer corrected')
        setquestionNumber(questionNumber+ 1)
          setDisableOnlick(false)
                 
           
      },2000)
      setStop(false) 
        }



      if (stop) {limit()}  

      const newGamehandler = () => {
        setSummaryAnswersList([])
        setquestionNumber(1)
        setQuestions(null)
        setPoints(null)
        setQuestions(null)
        setEarned('')
        setSumPoints([])
        setendLevel(false)
       
       
       
      }


    useEffect(()=>{
      questionNumber>1 && setEarned(moneyPyramide.find( (m)=> m.id === questionNumber - 1).question.question)
      data.length  == questionNumber -1 && setendLevel(true)
    
      },[moneyPyramide,questionNumber,stop])



    let totalPoints = [...sumPoints].reduce((total,item)=> total + parseInt(item.result),0)
    

if (totalPoints > 7) {auth.pass = true} 


  return (
    <div className='level' >
          
          
       
      

            {!endLevel &&

                <div className='timer'>

                {!timers ? <div className='timerCircleNumber'><Timer setStop={setStop} questionNumber={questionNumber}/> </div> :  
                <div className='timerCircleNumber1'></div>  
                    }

                </div>
            }

            <div className='topbar'>
                <div className='header'>
              
                {moneyPyramide.map((element,key)=> ( 
        
      
           
                <h5 key={element.id} className={element.id > questionNumber-1 ? 'circles' :  back[element.id-1].id===1 ? "circlesCorrect": "circlesWrong" }>{element.id }</h5>
                            ))} 
            
                </div>
            </div>   
     

        {endLevel ? <NextLevel  data={data} setBack={setBack} levelNumber={levelNumber}  totalPoints={totalPoints}  newGamehandler ={newGamehandler} summaryAnswersList={summaryAnswersList} /> : 
  
      <div className='game'>
        {!endLevel   &&   
               
            <Trivia data={data}
                    questions={questions} 
                    setQuestions={setQuestions}
                    setClsName={setClsName}
                    questionNumber={questionNumber}
                    SetClsNameWrong={SetClsNameWrong}
                    setSumPoints={setSumPoints}
                    setDisableOnlick={setDisableOnlick}
                    setTimers={setTimers}
                    setquestionNumber={setquestionNumber}
                    sumPoints={sumPoints}
                    setPoints={setPoints}
                    disableOnlick={disableOnlick}
                    clsName={clsName}
                    clsNameWrong={clsNameWrong}
                    setCircle={setCircle}
                    setSelectedAnswer={setSelectedAnswer}
                    selectedAnswer={selectedAnswer}
                    setBack={setBack}
                    back={back}
                    stop={stop}
                    setStop={setStop}
                    setSummaryAnswersList={setSummaryAnswersList}
                    summaryAnswersList={summaryAnswersList}    />
            }
        </div>            
            }
    
    </div>
  )
}
