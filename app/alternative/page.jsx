'use client';
import React, {useState} from 'react'

 export default function Quizz () {
    const[currentQuestion, setcurrentQuestion] =useState(0);
    const[showScore, setshowScore] =useState(false);
    const[score, setscore] =useState(0);
    const allQuestions =[
        {
           text:'valoarea lui x in urma structurii: if(x>3){x=x*2; x=x/10}?, stiind ca x=5 este:',
           options:[
            {answearText: '1', isCorrect:true},
            {answearText: '0', isCorrect: false},
            {answearText: '7', isCorrect: false} ,   
            
           ],

        },

        {
            text:'valoarea lui x in urma structurii: if(x%2==0){x--;}?, stiind ca x=271 este:',
            options:[
             {answearText: '217', isCorrect:false},
             {answearText: '270', isCorrect: true},
             {answearText: '271', isCorrect: false} ,   
             
            ],
 
         },
         {
            text:'a=16 b=64 swap(a,b) =>> a%b=?',
            options:[
             {answearText: '1', isCorrect:false},
             {answearText: '4', isCorrect: false},
             {answearText: '0', isCorrect: true} ,   
             
            ],
 
         },


    ]

    const handleAnswerOptions = (isCorrect) => {
        if (isCorrect) {
        setscore (score + 1);
        }
        const handleNextQuestion = currentQuestion + 1;

        if(handleNextQuestion < allQuestions.length) {
        setcurrentQuestion (handleNextQuestion);
        } else {
        setshowScore(true);
        }
    }

    return(
        <main className="flex w-full h-screen justify-center items-center bg-gray-800">
            
            <div className="bg-slate-100 p-12  rounded-lg shadow-2xl w-full max-w-xl">
                {
                    showScore ?(
                        <>
                        <div className="text-slate-700 text-xl font-semibold">
                            Punctajul tau: {score} din {allQuestions.length}
                        </div>
                        <br></br>
                        <button className=" m-2 h-10 w-24 text-semibold text-black rounded-md bg-purple-600 hover:bg-purple-700 hover:shadow-xl tranzition-all duration-500"onClick={() => {window.location.reload()}}>Reincearca</button>
                        </>
                    ) : (

                        <div className=" text-black text-xl font-semibold">
                        <div className='m-4'>
                        <span>Question {currentQuestion + 1} </span>/{allQuestions.length}
                        </div>
                        <div className='m-4'>
                            {allQuestions[currentQuestion].text}
                        </div>
                        <div className="w-full">
                            {
                             allQuestions[currentQuestion].options.map((options) =>(

                                // eslint-disable-next-line react/jsx-key
                                <button className="m-2 h-10 w-24 rounded-md bg-purple-600 hover:bg-purple-500 hover shadow-xl tranzition-all duration-500 ease-in-out" onClick={() => handleAnswerOptions(options.isCorrect)}>{options.answearText}</button>

                             ))
                            }

   
            
                        </div>
                        </div>
                    )
                }
            
            </div>

           

        </main>
      
    )

 }