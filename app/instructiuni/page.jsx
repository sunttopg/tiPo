import Image from 'next/image' ;
import for2 from '../../public/for2.png' ;
import if2 from '../../public/if2.png' ;
import while2 from '../../public/while2.png' ;
import dowhile2 from '../../public/dowhile2.png' ;
import React from 'react';

export default function Instructiuni (){
    

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
                    <h1 className="text-left p-4 font-extrabold text-7xl">Instrucțiuni C++</h1>
                    <p className="p-3">Instrucțiunile sunt porțiuni bine determinate ale unui program care stabilesc comportamentul programului – ce face acesta. Instrucțiunile se execută secvențial, în ordinea în care apar în program, și au un anumit efect. Fiecare instrucțiune (cu o excepție) se termină cu ;.
                        Se recomandă, deși nu este obligatoriu, ca pe o linie să nu fie mai mult de o instrucțiune, acest lucru sporind lizibilitatea programului. De asemenea, în cazul instrucțiunilor de control, se recomandă ca instrucțiunea subordonată să fie scrisă indentat.
                    </p>
                    <ul className="">
                            <li className=" hover:text-purple-800 mt-[3vw] text-3xl tracking-tight hover:tracking-wide  hover:duration-150 font-extrabold"><a class="nav-link" href="#sliniara">Structura liniară</a></li>
                             <ul className=" font-extrabold p-3">
                                <li className="hover:text-purple-800 tracking-tight hover:tracking-wide  hover:duration-150 font-extrabold"><a class="nav-link" href="#iexpresie">-Instrucțiunea expresie</a></li>
                                <li className="hover:text-purple-800 tracking-tight hover:tracking-wide  hover:duration-150 font-extrabold"><a class="nav-link" href="#ideclarativa">-Instrucțiunea declarativă</a></li>
                                <li className="hover:text-purple-800 tracking-tight hover:tracking-wide  hover:duration-150 font-extrabold"><a class="nav-link" href="#icompusa">-Instrucțiunea compusă</a></li>
                                <li className="hover:text-purple-800 tracking-tight hover:tracking-wide  hover:duration-150 font-extrabold"><a class="nav-link" href="#ireturn">-Instrucțiunea return</a></li>
                                <li className="hover:text-purple-800 tracking-tight hover:tracking-wide  hover:duration-150 font-extrabold"><a class="nav-link" href="#ivida">-Instrucțiunea vidă</a></li>
                             </ul>
                            <li className="hover:text-purple-800  tracking-tight hover:tracking-wide  hover:duration-150 text-3xl font-extrabold"><a class="nav-link" href="#salternative">Structuri alternative</a></li>
                            <ul className=" font-extrabold p-3">
                                <li className="hover:text-purple-800 tracking-tight hover:tracking-wide  hover:duration-150 font-extrabold"><a class="nav-link" href="#iif">-Instrucțiunea if</a></li>
                                <li className="hover:text-purple-800 tracking-tight hover:tracking-wide  hover:duration-150 font-extrabold"><a class="nav-link" href="#iswitch">-Instrucțiunea switch</a></li>
                            </ul>
                            <li className="hover:text-purple-800 text-3xl font-extrabold tracking-tight hover:tracking-wide  hover:duration-150"><a class="nav-link" href="#srepet">Structuri repetitive</a></li>
                            <ul className=" font-extrabold p-3">
                                <li  className="hover:text-purple-800 tracking-tight hover:tracking-wide  hover:duration-150 font-extrabold"><a class="nav-link" href="#iw">-Instrucțiunea while</a></li>
                                <li  className="hover:text-purple-800 tracking-tight hover:tracking-wide  hover:duration-150 font-extrabold"><a class="nav-link" href="#idw">-Instrucțiunea do...while</a></li>
                                <li  className="hover:text-purple-800 tracking-tight hover:tracking-wide  hover:duration-150 font-extrabold"><a class="nav-link" href="#ifor">-Instrucțiunea for</a></li>
                                <li  className="hover:text-purple-800 tracking-tight hover:tracking-wide  hover:duration-150 font-extrabold"><a class="nav-link" href="#ibreak">-Instrucțiunea break</a></li>
                                <li  className="hover:text-purple-800 tracking-tight hover:tracking-wide  hover:duration-150 font-extrabold"><a class="nav-link" href="#icont">-Instrucțiunea continue</a></li>
                            </ul>
                    </ul>
                </div>
                <div className="">
                    <div id="sliniara">
                        <h1 className="text-center p-2 mt-[5vw] text-purple-800 text-3xl  font-extrabold">Structura liniară</h1>
                        <ul className=" font-extrabold p-3">
                                <li className="hover:text-purple-800 tracking-tight hover:tracking-wide  hover:duration-150 font-extrabold"><a class="nav-link" href="#iexpresie">-Instrucțiunea expresie</a></li>
                                <li className="hover:text-purple-800 tracking-tight hover:tracking-wide  hover:duration-150 font-extrabold"><a class="nav-link" href="#ideclarativa">-Instrucțiunea declarativă</a></li>
                                <li className="hover:text-purple-800 tracking-tight hover:tracking-wide  hover:duration-150 font-extrabold"><a class="nav-link" href="#icompusa">-Instrucțiunea compusă</a></li>
                                <li className="hover:text-purple-800 tracking-tight hover:tracking-wide  hover:duration-150 font-extrabold"><a class="nav-link" href="#ireturn">-Instrucțiunea return</a></li>
                                <li className="hover:text-purple-800 tracking-tight hover:tracking-wide  hover:duration-150 font-extrabold"><a class="nav-link" href="#ivida">-Instrucțiunea vidă</a></li>
                        </ul>
                    </div>
                    <div>

                        <div id="iexpresie">
                            <p className="text-2xl p-2  font-extrabold mt-[3vw] underline decoration-purple-800">Instrucțiunea expresie</p>
                            <p className="p-2">Instrucțiunea expresie este cel mai frecvent folosit tip de instrucțiune dintr-un program C++. O expresie devine instrucțiune dacă este urmată de ;.</p>
                            <p className="p-2">Notă: În C++, operațiile de intrare/ieșire folosind stream-uri sunt și ele operații. În exemplul de mai sus, cout și x sunt operanzii, iar mai mic mai mic este operatorul. Rezultat operației este o adresă de memorie, a stream-ului cout.</p>
                            <p className="p-2">Exemplu: x = 2;x ++; afiseaza-l pe x</p>
                        </div>

                        <div id="ideclarativa">
                            <p className="text-2xl p-2 font-extrabold mt-[3vw] underline decoration-purple-800">Instrucțiunea declarativă</p>
                            <p className="p-2">Printr-o instrucțiune declarativă se pot declara identificatori de un anumit tip. Identificatorii pot fi variabile, dar vom vedea mai târziu că pot fi și funcții.</p>
                            <p className="p-2 underline  md:underline-offset-4">Sintaxa este : Tip_de_date Lista_identificatori;</p>
                            <p className="p-2">Tip_de_date poate fi orice tip C++ corect (int, double, etc.), iar Lista_identificatori este alcătuită din cel puțin un identificator. Dacă sunt mai mulți, se vor separa prin caracterul virgulă ,.</p>
                            <p className="p-2">Exemple: int x, y , z; double a;</p>
                        </div>

                        <div id="icompusa">
                            <p className="text-2xl p-2 font-extrabold mt-[3vw]  underline decoration-purple-800">Instrucțiunea compusă</p>
                            <p className="p-2">Instrucțiunea compusă sau blocul este o grupare de declarații și instrucțiuni închise între acolade {}. Ele au fost introduse cu scopul de a folosi mai multe instrucțiuni acolo unde sintaxa cere o singură instrucțiune. Instrucţiunea compusă sau blocul sunt echivalente sintactic cu o singură instrucţiune.

                                Blocul determină și un domeniu de vizibilitate pentru identificatori. Mai precis, identificatorii declarați într-un bloc vor fi eliminați la terminarea acestuia.</p>
                            <p className="p-2">Exemple: int x = 5; int x = 7; [daca vrem sa-l afisam pe x se va afisa 7]</p>
                        </div>

                        <div id="ireturn">
                            <p className="text-2xl p-2 font-extrabold mt-[3vw] underline decoration-purple-800">Instrucțiunea return</p>
                            <p className="p-2">O instrucţiune return permite ieşirea dintr-o funcţie și transmiterea controlului apelantului funcției. O funcţie poate returna valori apelantului său, prin intermediul unei instrucţiuni return.</p>
                            <p className="p-2 underline md:underline-offset-4">Sintaxa: return(sau return expresie);</p>
                            <p className="p-2">În primul caz valoarea returnată nu este definită. În al doilea caz valoarea expresiei este returnată apelantului funcţiei.</p>
                        </div>

                        <div id="ivida">
                            <p className="text-2xl  font-extrabold  p-2 mt-[3vw]  underline decoration-purple-800">Instrucțiunea vidă</p>
                            <p className="p-2">În numite situații, sintaxa limbajului C++ cere prezența unei instrucțiuni într-un anumit punct al programului, dar logica acestuia nu cere acest lucru. Aici intervine instrucțiunea vidă, cu următoarea sintaxă: ; </p>
                            <p className="p-2">La întâlnirea instrucțiunii vide nu se va executa nicio acțiune.</p>
                        </div>

                    </div>


                    <div id="salternative">
                        <h1 className=" text-center p-8 mt-[5vw] text-purple-800 text-3xl font-extrabold">Structuri alternative</h1>
                        <ul className=" font-extrabold p-3">
                                <li className="hover:text-purple-800 tracking-tight hover:tracking-wide  hover:duration-150 font-extrabold"><a class="nav-link" href="#iif">-Instrucțiunea if</a></li>
                                <li className="hover:text-purple-800 tracking-tight hover:tracking-wide  hover:duration-150 font-extrabold"><a class="nav-link" href="#iswitch">-Instrucțiunea switch</a></li>
                        </ul>
                    </div>

                    <div id="iif">
                        <p className="text-2xl  font-extrabold  mt-[3vw] underline decoration-purple-800">Instrucțiunea if</p>
                        <p className="p-2">Instrucțiunea if este cea mai utilizată structură alternativă.</p>
                        <p className="p-2">Sintaxa:</p>
                        <p className="p-2"> if (expresie) instructiunea 1;</p>
                        <p className="p-2">else instructiunea 2;</p>
                        <p className="p-2">Sau o altă variantă</p>
                        <p className="p-2"> if ( Expresie ) instrucțiune1</p>
                        <Image src={if2} alt="/" width={1000} height={3000} className='ml-[6vw]' />
                        <div className="border-2 border-purple-800 ">
                            <p className="p-2 text-xl font-extrabold">Observații</p>
                            <div className="p-2 ">
                                <p className="p-2">-Instrucțiune1 se execută numai dacă Expresie este adevărată. </p>
                                <p className="p-2">-Instrucțiune2 se execută numai dacă Expresie este falsă. În nicio situație nu se execută ambele instrucțiuni!</p>
                                <p className="p-2">-Instrucțiune1 și Instrucțiune2 pot fi orice fel de instrucțiuni, inclusiv instrucțiunea vidă și inclusiv o altă instrucțiune if.</p>
                                <p className="p-2">-Dacă logica programului o cere, Instrucțiune1 și/sau Instrucțiune2 pot fi instrucțiuni compuse, care să conțină mai multe instrucțiuni.</p>
                                <p className="p-2">-Datorită eventualelor conversii, pentru a stabili dacă o expresie este nenulă sau nulă nu trebuie neapărat să folosim operatorii relaționali == și !=.</p>
                            </div>
                        </div>
                        
                    </div>
                    <div id="iswitch">
                        <p className="text-2xl  font-extrabold mt-[3vw] underline decoration-purple-800">Instrucțiunea switch</p>
                        <p className="p-2">Instrucțiunea switch permite executarea unor instrucțiuni, în funcție de egalitatea unei expresii cu anumite valori numerice constante:</p>
                        <p className="p-2">Sintaxa:</p>
                        <p className="p-2 text-xl font-extrabold">Mod de execuție:</p>
                        <div className="p-2 ">
                            <p className="p-2">-se evaluează Expresie</p>
                            <p className="p-2">-dacă valoarea expresiei este egală cu una dintre valorile constante din clauzele case, se execută instrucțiunile din grupul de instrucțiuni corespunzător, apoi se trece la instrucțiunea de după switch</p>
                            <p className="p-2">-dacă valoarea expresiei nu este egală cu niciuna dintre valorile constante din clauzele case, se verifică existența clausei default;</p>
                            <p className="p-2">-dacă există clauza default, se execută instrucțiunile din grupul de instrucțiuni corespunzător clauzei default, apoi se trece la instrucțiunea de după switch</p>
                            <p className="p-2">-dacă nu există clauza default, se trece la instrucțiunea de după switch.</p>
                        </div>
                    </div>

                    <div >
                    <h1 id="srepet" className="text-center p-8 mt-[5vw] text-purple-800 text-3xl font-extrabold">Structuri repetitive</h1>
                            <ul className=" font-extrabold p-3">
                                <li  className="hover:text-purple-800 tracking-tight hover:tracking-wide  hover:duration-150 font-extrabold"><a class="nav-link" href="#iw">-Instrucțiunea while</a></li>
                                <li  className="hover:text-purple-800 tracking-tight hover:tracking-wide  hover:duration-150 font-extrabold"><a class="nav-link" href="#idw">-Instrucțiunea do...while</a></li>
                                <li  className="hover:text-purple-800 tracking-tight hover:tracking-wide  hover:duration-150 font-extrabold"><a class="nav-link" href="#ifor">-Instrucțiunea for</a></li>
                                <li  className="hover:text-purple-800 tracking-tight hover:tracking-wide  hover:duration-150 font-extrabold"><a class="nav-link" href="#ibreak">-Instrucțiunea break</a></li>
                                <li  className="hover:text-purple-800 tracking-tight hover:tracking-wide  hover:duration-150 font-extrabold"><a class="nav-link" href="#icont">-Instrucțiunea continue</a></li>
                            </ul>
                    </div>

                    <div id="iw">
                        <p className="text-2xl  font-extrabold mt-[3vw] underline decoration-purple-800">Instrucțiunea while</p>
                        <p className="p-2">Reprezintă o structură repetitivă cu număr necunoscut de pași și test inițial;</p>
                        <p className="p-2 underline md:underline-offset-4">Sintaxa: while (Expresie) Instructiune</p>
                        <Image src={while2} alt="/" width={1000} height={3000} className='ml-[9vw]' />
                        <div className="border-2 border-purple-800 ">
                            <p className="p-2 text-xl font-extrabold">Observatii:</p>
                            <div className="p-2 ">
                                <p className="p-2">-Instructiune se execută cât timp Expresie este true – condiție adevărată.</p>
                                <p className="p-2">-Dacă Expresie este de început false, Instructiune nu se execută deloc.</p>
                                <p className="p-2">-Instructiune poate fi orice fel de instrucțiune, dar una singură.</p>
                                <p className="p-2">-Dacă sunt necesare mai multe instrucțiuni, se va folosi instrucțiunea compusă.</p>
                                <p className="p-2">-Este necesar ca cel puțin o variabilă care apare în Expresie să-și modifice valoarea în Instructiune. </p>
                                <p className="p-2">-Altfel se obține o buclă infinită.</p>
                            </div>
                        </div>
                        <p className="p-2 text-xl font-extrabold">Exemplu : </p>
                        <p className="p-2">Determinați cel mai mare divizor comun a doua numere.</p>
                        <div className="p-4 text-purple-800">
                            <p className="p-2 ">int a , b;______</p>
                            <p className="p-2 ">while(a !=b )_____</p>
                            <p className="p-2 ">___a=a-b;_____</p>
                            <p className="p-2 ">__if(a mai mare ca b)_</p>
                            <p className="p-2 ">___a=a-b;_____</p>
                            <p className="p-2 ">__else______</p>
                            <p className="p-2 ">___b=b-a____</p>
                            <p className="p-2 ">_Și am aflat ca cmmdc-ul este a</p>
                        </div>
                    </div>

                    <div id="idw">
                        <p className="text-2xl  font-extrabold  mt-[3vw] underline decoration-purple-800">Instrucțiunea do...while</p>
                        <p className="p-2">Instrucțiunea do ... while este o structură repetitivă cu număr necunoscut de pași și test final.</p>
                        <p className="p-2 underline md:underline-offset-4">Sintaxa :  do Instructiune while ( Expresie );</p>
                        <Image src={dowhile2} alt="/" width={1000} height={3000} className='ml-[10vw]' />
                        <div className="border-2 border-purple-800 ">
                            <p className="p-2 text-xl font-extrabold">Observatii:</p>
                            <div className="p-2 ">
                                <p className="p-2">-Instructiune se execută cât timp Expresie este true – condiție adevărată.</p>
                                <p className="p-2">-Dacă Expresie este de început false, Instructiune se execută exact o dată. </p>
                                <p className="p-2">-În orice situație, Instructiune se execută cel puțin o dată.</p>
                                <p className="p-2">-Instructiune poate fi orice fel de instrucțiune, dar una singură.</p>
                                <p className="p-2">-Dacă sunt necesare mai multe instrucțiuni, se va folosi instrucțiunea compusă.</p>
                                <p className="p-2">-Este necesar ca cel puțin o variabilă care apare în Expresie să-și modifice valoarea în Instructiune. </p>
                                <p className="p-2">-Altfel se obține o buclă infinită.</p>
                            </div>
                        </div>
                    </div>

                    <div id="ifor">
                        <p className="text-2xl  font-extrabold mt-[3vw] underline decoration-purple-800">Instrucțiunea for</p>
                        <p className="p-2">Instrucțiunea for este o structură repetitivă cu număr necunoscut de pași și test inițial, echivalentă cu while.</p>
                        <Image src={for2} alt="/" width={1000} height={3000} />
                        <div className="border-2 border-purple-800 ">
                            <p className="p-2 text-xl font-extrabold">Observatii:</p>
                            <div className="p-2 ">
                                <p className="p-2">-Instructiune se execută cât timp Expresie_de_Testare este nenulă  condiție adevărată.</p>
                                <p className="p-2">-Dacă Expresie_de_Testare este de început vidă, Instructiune nu se execută deloc, iar Expresie_de_Continuare nu se mai evaluează.</p>
                                <p className="p-2">-Instructiune poate fi orice fel de instrucțiune, dar una singură. Dacă sunt necesare mai multe instrucțiuni, se va folosi instrucțiunea compusă.</p>
                                <p className="p-2">-Este necesar ca cel puțin o variabilă care apare în Expresie_de_Testare să-și modifice valoarea în Instructiune sau la evalurea Expresiei_de_Continuare. Altfel se obține o buclă infinită.</p>
                                <p className="p-2">-Cele trei expresii, de_Initializare, _de_Testare și _de_Continuare sunt separate prin caracterul ; obligatoriu!</p>
                                <p className="p-2">-Oricare dintre cele trei expresii, de_Initializare, _de_Testare și _de_Continuare, eventual toate, poate să lipsească. În acest caz avem expresii vide. Dacă Expresie_de_Testare este vidă, rezultatul său este nenul!</p>
                                <p className="p-2">-Expresie_de_Initializare se execută o singură dată. Poate să conțină și declararea unor variabile. În acest caz, variabilele vor exista numai în instrucțiunea for.</p>
                            </div>
                        </div>
                    </div>

                    <div id="ibreak">
                        <p className="text-2xl  font-extrabold mt-[3vw] underline decoration-purple-800">Instrucțiunea break</p>
                        <p className="p-2">Instrucțiunea break are sens și poate fi folosită numai în instrucțiunile switch, while, do ... while și for.</p>
                        <p className="p-2 underline md:underline-offset-4">Sintaxa : break;</p>
                        <p className="p-2"></p>
                    </div>

                    <div id="icont">
                        <p className="text-2xl  font-extrabold mt-[3vw] underline decoration-purple-800">Instrucțiunea continue</p>
                        <p className="p-2">Instrucțiunea continue are sens și poate fi folosită numai în instrucțiunile while, do ... while și for.</p>
                        <p className="p-2 underline md:underline-offset-4">Sintaxa : continue;</p>
                        <p className="p-2">Efectul instrucțiunii continue este ignorarea instrucțiunilor care îi urmează în corpul ciclului și revenirea la evaluarea Expresiei, în cazul lui while, do ... while, respectiv la evaluarea Expresiei_de_Continuare, în cazul lui for.</p>
                    </div>


                    <div>
                        <p className="text-2xl  font-extrabold  mt-[3vw] underline decoration-purple-800">Exerciții</p>
                        <p className="p-2">1. Să se afișeze numele zilei dintr-o săptămână în funcție de numărul ei.(dacă variabila zi are valoarea 6 sau 7 se va afișa weekend)</p>
                        <p className="p-2">2. Să se verifice dacă un număr întreg citit este par sau impar.</p>
                        <p className="p-2">3. Se citesc doua numere n m stabiliți dacă m este divizor al lui n, tratând cazul m=0. Este un exemplu de instrucțiuni if imbricate (una în alta).</p>
                        <p className="p-2">4. Se citește un număr natural n. Să se determine suma divizorilor săi.</p>
                        <p className="p-2">5. Să se scrie un program care afișează divizorii comuni ai două numere naturale citite de la tastatură..</p>
                        <p className="p-2">6. Se considera n numere și o cifră nenulă k. Să se calculeze suma cifrelor numerelor dintre cele n citite care incep cu cifra k.</p>
                    </div>
                </div>
            </div>
        </main>
)}