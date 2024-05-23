'use client'
import { useState } from "react";

const page = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setvalue] = useState("");
    const changeValue = (event) => {
        setvalue(event.target.value)
    }

    const verify = () => {
        if(value === "do{s=s+x%10; x=x/10}while(x>0);")
        alert("Ai raspuns corect!");
        else
        alert("Ai raspuns gresit...");

    }

    const rasp = () => {
        alert("Raspunsul corect era do{s=s+x%10; x=x/10}while(x>0); ");
    }

    return (
        <main className="flex w-full h-screen justify-center items-center bg-gray-800 p-8">
            <div className='h-[400px] w-[600px] bg-white rounded-lg mt-[7px]'>
                <h1 className='text-5xl font-bold text-center my-[30px] text-primary text-black'>TEST#05</h1>
                <p className="text-xl pt-[10px] pb-[35px] text-black text-center">Calculati suma cifrelor unui numar x, folosind o structura repetitiva cu test final, stiind ca suma va fi memorata in variabila s *a nu se folosi alte variabile*</p>
                <div className="flex justify-center items-center">
                    <input
                    className="h-[40px] w-[220px] text-black  rounded-lg border-2 border-purple-400"
                    type="text"
                    onChange={changeValue}
                    />
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