import { ReactTyped, Typed } from "react-typed";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"




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
    <main className="flex min-h-screen flex-col items-center justify-between  bg-gray-800">
  
    <div className=" absolute top-0 left-0 flex flex-col h-screen w-[13vw] rounded  bg-purple-600 shadow-lg">
        <div className="text-3xl shadow-lg shadow-purple-800 text-center font-semibold py-4">TiP0</div>
        <a href="/culegere" target="_self" className="text-2xl text-center border-t-2 font-semibold border-purple-700 shadow-lg shadow-purple-700 py-4 hover:bg-purple-800 hover:text-purple-300  transition-colors duration-300 ease-in-out" >Culegere</a>
        <a href="/test" target="_self" className="text-2xl border-t-2 text-center border-purple-700 py-4 font-semibold shadow-lg shadow-purple-700 hover:bg-purple-800 hover:text-purple-300 transition-colors duration-300 ease-in-out">   Test</a>
        <a href="/intreaba" target="_self" className="text-2xl border-t-2 text-center border-purple-700 py-4 font-semibold shadow-lg shadow-purple-700 hover:bg-purple-800 hover:text-purple-300 transition-colors duration-300 ease-in-out">Intreaba</a>
       
      </div>

      
      <div className="text-white">
        <div className="max-w-[500 px] mtr  w-full h-screen mx-auto text-center flex flex-col">
            <p className="text-3xl font-bold text-purple-600"> plmplmplmplmplmplmplmplmplmplm</p>
          <h1 className=" text-5xl text-bold md:py-4">Invata sa programezi in C++ mai eficient </h1>
          </div>

          
      </div>
      <a href="/login" className="  mb-4 p-3 rounded-lg bg-purple-500 text-white text-bold hover:bg-purple-600 focus:outline-none">
              Log In
          </a>
      
      

      </main>
  )
}

// target="_blank"