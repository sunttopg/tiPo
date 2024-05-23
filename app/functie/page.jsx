import Image from 'next/image' ;
import functii from '../../public/functii.png' ;
import functii2 from '../../public/functii2.png' ;

export default function Functii (){

    return(
        
        <main className="bg-gray-800 p-6">

<div className=" fixed top-0 left-0 flex flex-col h-screen w-[13vw] rounded  bg-purple-600 shadow-lg">
        <div className="text-6xl bg-purple-600 shadow-lg shadow-purple-800 text-center font-extrabold py-6">Ti<span className="text-gray-800">P0</span></div>
        <a href="/culegere" target="_self" className="text-2xl text-center border-t-2 font-semibold tracking-tight hover:tracking-wide  hover:duration-150 border-purple-700 shadow-lg shadow-purple-700 py-4 hover:bg-purple-800 hover:text-purple-300  transition-colors duration-300 ease-in-out" >Lecții</a>
        <a href="/test" target="_self" className="text-2xl border-t-2 text-center border-purple-700 tracking-tight hover:tracking-wide  hover:duration-150 py-4 font-semibold shadow-lg shadow-purple-700 hover:bg-purple-800 hover:text-purple-300 transition-colors duration-300 ease-in-out">   Teste</a>
        <a href="/intreaba" target="_self" className="text-2xl border-t-2 text-center border-purple-700 tracking-tight hover:tracking-wide  hover:duration-150 py-4 font-semibold shadow-lg shadow-purple-700 hover:bg-purple-800 hover:text-purple-300 transition-colors duration-300 ease-in-out">Întreabă</a>
        <a href="/" target="_self" className="text-2xl border-t-2 text-center border-purple-700 tracking-tight hover:tracking-wide  hover:duration-150 py-4 font-semibold shadow-lg shadow-purple-700 hover:bg-purple-800 hover:text-purple-300 transition-colors duration-300 ease-in-out">Homepage </a>
      </div>
            <div className="text-black bg-white rounded-xl ml-200 mt-[0vw] w-[70vw] ml-[20vw] text-lg font-semibold text-left p-20 border-8 border-purple-600">
                <div>
                    <h1 className="text-left p-4 font-extrabold text-7xl">Funcții C++</h1>
                    <ul className="font-extrabold p-8">
                        <li className="hover:text-purple-800 tracking-tight hover:tracking-wide  hover:duration-150"><a class="nav-link" href="#fri">-Funcții:recursive, iterative</a></li>
                        <li className="hover:text-purple-800 tracking-tight hover:tracking-wide  hover:duration-150"><a class="nav-link" href="#fvi">-Functii: void, int</a></li>
                    </ul>
                </div>

                <div id="fri">
                    <h1 className="text-center mt-[3vw] text-purple-800 text-3xl font-extrabold">Funcții:recursive, iterative</h1>
                    
                    <p className="text-2xl  font-extrabold mt-[3vw] underline decoration-purple-800">Funcții recursive</p>
                    <p className="p-2">O funcție recursivă este o funcție care se apelează pe ea însăși pentru a rezolva o problemă. </p>
                    <p className="p-2 text-xl font-extrabold">Exemplu: </p>
                    <p>Pentru a înțelege mai bine cum funcționează funcțiile recursive, să luăm un exemplu simplu. Să presupunem că dorim să calculăm factorialul unui număr dat.

                    orialul unui număr n este produsul tuturor numerelor între 1 și n. Putem exprima factorialul într-o formă recursivă astfel:</p>
                    <p className="text-xl font-extrabold p-4 underline decoration-purple-800">factorial(n) = n * factorial(n-1)</p>
                    <p className="p-2 text-xl font-extrabold">Implementarea funcției:</p>
                    <p className="p-2 text-purple-800">int factorial(int n)</p>
                    <div className="p-4 text-purple-800">
                        
                        <p className="">if (n == 0 || n == 1) return 1;</p>
                        <p className="">else  return n * factorial(n-1);</p>
                    </div>


                    <p className="text-2xl font-extrabold mt-[3vw] underline decoration-purple-800">Funcții iterative</p>
                    <p className="p-2">O funcție iterativă folosește structuri repetitive, cum ar fi bucle for, while sau do-while, pentru a repeta o secvență de pași până când o anumită condiție este îndeplinită.</p>
                    
                </div>

                <div id="fvi">
                    <h1 className="text-center mt-[3vw] text-purple-800 text-3xl font-extrabold">Functii: void, int</h1>
                    <p className="text-2xl  font-extrabold mt-[3vw] underline decoration-purple-800">Functii void</p>
                    <p className="p-2">Funcțiile void sunt funcții care nu returnează nicio valoare. În general, funcțiile void sunt folosite pentru a efectua operații precum modificarea stării unui obiect, afișarea unor mesaje, sau pentru a schimba valori prin parametrii lor (referințe sau pointeri).</p>
                    <Image src={functii} alt="/" width={800} height={1000} />
                    <p className="text-2xl  font-extrabold mt-[3vw] underline decoration-purple-800">Functii int</p>
                    <p className="p-2">Funcțiile int sunt funcții care returnează o valoare de tip întreg (int). Aceste funcții sunt utilizate atunci când este necesar să se întoarcă un rezultat numeric care poate fi folosit ulterior în program.</p>
                    <Image src={functii2} alt="/" width={800} height={1000} />
                </div>

                <div>
                        <p className="text-2xl  font-extrabold  mt-[3vw] underline decoration-purple-800">Exerciții</p>
                        <p className="p-2">1.Să se scrie o funcție C++ recursivă care determină cel mai mare divizor comun a două numere transmise ca parametri și întoarce rezultatul prin intermediul unui parametru de ieșire.</p>
                        <p className="p-2">2.Să se scrie o funcție C++ recursivă care să returneze suma cifrelor unui număr natural transmis ca parametru.</p>
                        <p className="p-2">3.Să se scrie o funcție C++ recursivă care să returneze numărul de cifre egale cu zero ale unui număr natural transmis ca parametru.</p>
                        <p className="p-2">4.Să se scrie o funcție C++ recursivă care să returneze numărul cifrelor divizibile cu 3 ale unui număr natural n transmis ca parametru.</p>
                        <p className="p-2">5.Să se scrie o funcție C++ recursivă cu trei parametri n, k, c și întoarce prin parametrul c numărul de cifre ale lui n care sunt mai mari sau egale decât k.</p>
                        <p className="p-2">6.Scrieți definiția completă unui subprogram C++ recursiv care returnează suma elementelor unui tablou unidimensional transmis ca parametru.</p>
                </div>
            </div>

        </main>
    )}