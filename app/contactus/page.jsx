'use client';
import {useRef} from "react";
import emailjs from '@emailjs/browser';
export default function Contact (){
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_er2skl8', 'template_82kd7r6', form.current, {
            publicKey: 'FuTIv9gTlImgjznqe',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
          e.target.reset()
      };
    

    return(
     
    <main className="bg-gray-800 p-10 h-screen">
    
   
        <section className="bg-gray-800 ml-3 w-[40vw] flex flex-col mt-[3vw]">
            <div>
                <h2 className="text-5xl font-extrabold mb-7  hover:text-purple-500 " >Contact us</h2>
                <div className="p-4"></div>
                <form ref={form} onSubmit={sendEmail} className=" flex flex-col">
                    <input className="p-5 rounded-xl text-gray-800 focus:border-purple-800" type="text" placeholder="Numele" name="user_name" required>
                    </input>
                    <div className="p-4"></div>
                    <input className="p-5  rounded-xl text-gray-800 focus:border-purple-500" type="email" placeholder="Email" name="user_email" required>
                    </input>
                    <div className="p-4"></div>
                    <input className="p-5  rounded-xl  text-gray-800 focus:border-purple-500" type="text" placeholder="Subiectul" name="user_subject" required>
                    </input>
                    <div className="p-4"></div>
                    <textarea  className="  rounded-xl  text-gray-800 focus:border-purple-500"name="message" cols="30" rows="10"></textarea>
                    <button   className="w-full p-3 mt-9 rounded-xl bg-purple-500 text-white hover:bg-purple-600 focus:outline-none" type="submit"> Trimite </button>
                </form>
            </div>
        </section>
        </main>
    )

}