'use client';

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState} from "react";

export default function LoginPage(){
    const[email,setEmail] = useState('')
    const[password,setPassword]=useState('')
    const router = useRouter()


    const supabase =createClientComponentClient();

    const handleSignUp = async () => {
        await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo:`${location.origin}/auth/callback`
            }
        })
        router.refresh();
        
    }

    const handleSignIn = async () => {
        await supabase.auth.signInWithPassword({
            email,
            password
        })
        router.refresh();
       
    }
    
    return(
        <main className="h-screen flex items-center justify-center bg-gray-800 p-6">
            <div className="bg-gray-900 p-8 rounded-lg shadow-md w-96">
                <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
             />

                <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"

             />

             <button 
             onClick={handleSignUp}
             className="w-full mb-2 p-3 rounded-md bg-purple-600 text-white hover:bg-purple-700 focus:outline-none"
             >Sign Up</button>

             <button 
             onClick={handleSignIn}
             className="w-full  p-3 rounded-md bg-gray-700 text-white hover:bg-gray-600 focus:outline-none"
             >Sign In</button>
            </div>
            
        </main>
    )

}