'use client';
import React, {useState} from 'react'

 export default function Quizz () {
    const[currentQuestion, setcurrentQuestion] =useState(0);
    const[showScore, setshowScore] =useState(false);
    const[score, setscore] =useState(0);
    const allQuestions =[
        {
           text:'operatorul care imparte este?',
           options:[
            {answearText: '/', isCorrect:true},
            {answearText: '+', isCorrect: false},
            {answearText: '%', isCorrect: false} ,   
            
           ],

        },

        {
            text:'27653 % 10 =?',
            options:[
             {answearText: '0', isCorrect:false},
             {answearText: '3', isCorrect: true},
             {answearText: '1', isCorrect: false} ,   
             
            ],
 
         },
         {
            text:'echivalentul expresiei x=x+1 este?',
            options:[
             {answearText: 'x--', isCorrect:false},
             {answearText: 'x=x-2', isCorrect: false},
             {answearText: 'x++', isCorrect: true} ,   
             
            ],
 
         },

         {
            text:'x este un nr de exact 3 cifre adevarata este urm afirmatie:1.x/100!=0 2.x/100!=0&&x/1000==0 3.x%100==0',
            options:[
             {answearText: '1', isCorrect:false},
             {answearText: '2', isCorrect: true},
             {answearText: '3', isCorrect: false} ,   
             
            ],
 
         },

         {
            text:'ca numarul x sa fie cuprins in [a,b}: 1.a<=x||x>=b; 2.a<=x&&x<b; 3.a<=x&&x<=b',
            options:[
             {answearText: '1', isCorrect:false},
             {answearText: '2', isCorrect: false},
             {answearText: '3', isCorrect: true} ,   
             
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