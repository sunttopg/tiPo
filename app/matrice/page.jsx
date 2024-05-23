'use client';
import React, {useState} from 'react'

 export default function Quizz () {
    const[currentQuestion, setcurrentQuestion] =useState(0);
    const[showScore, setshowScore] =useState(false);
    const[score, setscore] =useState(0);
    const allQuestions =[
        {
           text:'Pentru parcurgerea diagonalei principele a unei matrici folosim?  //i-(1,n)',
           options:[
            {answearText: 'A[i][i]', isCorrect:true},
            {answearText: 'A[i][i+1]', isCorrect: false},
            {answearText: 'A[i-1][i]', isCorrect: false} ,   
            
           ],

        },

        {
            text:'Pentru parcurgerea diagonalei secundare a unei matrici folosim? //indexare de la 0, i-(1,n)',
            options:[
             {answearText: 'A[i][n-1-i]', isCorrect:true},
             {answearText: 'A[i-1][n-1-i]', isCorrect: false},
             {answearText: 'A[i][n+1-i]', isCorrect: false} ,   
             
            ],
 
         },
         {
            text:'Ca o matrice cu n linii si m coloane sa fie patratica:',
            options:[
             {answearText: 'n==m', isCorrect:true},
             {answearText: 'm=0', isCorrect: false},
             {answearText: 'n!=m', isCorrect: false} ,   
             
            ],
 
         },

         {
            text:'Pentru a parcurge emisfera sudica a unei matrici patratice: 1.i<j && i+j>n-1 2.i>j && i+j<n-1 3.i>j && i+j >n-1 ',
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
                                <button className="m-2 h-10 w-40 rounded-md bg-purple-600 hover:bg-purple-500 hover shadow-xl tranzition-all duration-500 ease-in-out" onClick={() => handleAnswerOptions(options.isCorrect)}>{options.answearText}</button>

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