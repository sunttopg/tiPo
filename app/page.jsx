import { ReactTyped, Typed } from "react-typed";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import Image from 'next/image' ;
import { Container } from "postcss";
import light from '../public/light.png';
import lamp from '../public/lamp.png';




export default async function Home() {
  const cookieStore=cookies();
  const supabase =createServerComponentClient({cookies: () => cookieStore});
  const {data: {user}}= await supabase.auth.getUser()
  console.log({user})
  if(!user){
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <a href={'/login'}>
            You are not logged in. Click here to go login.
          </a>
        </main>
      )
    }
  
  return (
    <main className="flex min-h-screen items-center justify-between  bg-gray-800">

< div className="top-0 flex  ml-[75vw]  left-0 mt-[-44vw] ">
          <a href="/contactus" className="text-white text-xl  hover:text-purple-600 p-3"> Contact us</a>
          <a href="/login" className="text-white text-xl ml-[3vw] hover:text-purple-600 p-3"> Log in</a>
          <button className="rounded-full flex ml-[3vw] mt-[0.5vw] w-[3.5vw] h-[1.5vw] bg-purple-600  " onClick="toggleBtn()" id="btn" ><span className="w-[1.5vw] h-[1.5vw] rounded-full bg-white"> </span></button>
        </div>

      <div className=" fixed lamp-container mt-[-5.9vw]">
      <Image src={lamp} alt="/" width={206} height={500} className="ml-[27vw]"/>
      <Image src={light} alt="/" width={750} height={1100} className="ml-[12.4vw]"/>

      </div>
    <div className=" fixed top-0 left-0 flex flex-col h-screen w-[13vw] rounded  bg-purple-600 shadow-lg">
        <div className="text-6xl bg-purple-600 shadow-lg shadow-purple-800 text-center font-extrabold py-6">Ti<span className="text-gray-800">P0</span></div>
        <a href="/culegere" target="_self" className="text-2xl text-center border-t-2 font-semibold tracking-tight hover:tracking-wide  hover:duration-150 border-purple-700 shadow-lg shadow-purple-700 py-4 hover:bg-purple-800 hover:text-purple-300  transition-colors duration-300 ease-in-out" >Lecții</a>
        <a href="/test" target="_self" className="text-2xl border-t-2 text-center border-purple-700 tracking-tight hover:tracking-wide  hover:duration-150 py-4 font-semibold shadow-lg shadow-purple-700 hover:bg-purple-800 hover:text-purple-300 transition-colors duration-300 ease-in-out">   Teste</a>
        <a href="/intreaba" target="_self" className="text-2xl border-t-2 text-center border-purple-700 tracking-tight hover:tracking-wide  hover:duration-150 py-4 font-semibold shadow-lg shadow-purple-700 hover:bg-purple-800 hover:text-purple-300 transition-colors duration-300 ease-in-out">Întreabă</a>
       
      </div>
      <p className=" ml-[-315vw] mt-[16vw] font-bold text-left text-purple-600 text-4xl p-2">ÎNVAȚĂ SĂ PROGRAMEZI EFICIENT!</p>
      <p className="  ml-[-331vw] mt-[21vw] font-extrabold text-white text-3xl p-20"> Stăpânește C++ cu lecții interactive și proiecte practice!</p>
      <p className=" ml-[-338vw] mt-[26vw] text-gray-600 text-xl font-sm p-20 ">``C++ este un limbaj de programare general-purpose, dezvoltat de Bjarne Stroustrup în 1979``</p>
     
      
      
      

      </main>
  )
}

// target="_blank"