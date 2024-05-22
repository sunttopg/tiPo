'use client'
import { useState } from "react";

const page = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setvalue] = useState("");
    const changeValue = (event) => {
        setvalue(event.target.value)
    }

    const verify = () => {
        if(value === "string")
        alert("Ai raspuns corect!");
        else
        alert("Ai raspuns gresit...");

    }

    const rasp = () => {
        alert("Raspunsul corect era string");
    }

    return (
        <main className="flex w-full h-screen justify-center items-center bg-gray-800 p-8">
            <div className='h-[400px] w-[500px] bg-white rounded-lg mt-[7px]'>
                <h1 className='text-5xl font-bold text-center my-[30px] text-primary text-black'>Exercitiul 1</h1>
                <p className="text-xl pt-[10px] pb-[35px] text-black text-center">Completeaza urmatoarea secventa de cod:</p>
                <div className="flex justify-center items-center">
                    <input
                    className="h-[30px] w-[80px] text-black  rounded-lg border-2 border-purple-400"
                    type="text"
                    onChange={changeValue}
                    />
                    <span className="ml-[10px] text-black text-2xl">nume =`Daniel`</span>
                </div>
                <div className="flex justify-center items-center p-10 ">
                    <button className='bg-purple-500 w-[90px] h-[50px] font-bold rounded-xl login_buton' onClick={verify}>verifica</button>
                    <div className="p-4"></div>
                    <button className=' bg-purple-500 w-[220px] h-[50px] font-bold rounded-xl login_buton' onClick={rasp}>afiseaza raspuns</button>
                </div>
            </div>
        </main>
    )
}

export default page