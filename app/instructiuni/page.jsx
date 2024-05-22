export default function Instructiuni (){

    return(
        
        <main className="bg-gray-800 p-10">

            <nav className="fixed top-0 left-0 flex flex-col h-screen w-[13vw] rounded  bg-purple-600 shadow-lg">
                <div className="text-6xl bg-purple-600 shadow-lg shadow-purple-800 text-center font-semibold py-6">TiP0</div>
                <a href="/culegere" target="_blank" className="text-2xl bg-purple-700 text-center border-t-2 font-semibold border-purple-700 shadow-lg shadow-purple-700 py-4 hover:bg-purple-800 hover:text-purple-300  transition-colors duration-300 ease-in-out">Culegere</a>
                <a href="/test" target="_blank" className="text-2xl bg-purple-700 border-t-2 text-center border-purple-700 py-4 font-semibold shadow-lg shadow-purple-700 hover:bg-purple-800 hover:text-purple-300 transition-colors duration-300 ease-in-out">Test</a>
                <a href="/duel" target="_blank" className="text-2xl bg-purple-700 border-t-2 text-center border-purple-700 py-4 font-semibold shadow-lg shadow-purple-700 hover:bg-purple-800 hover:text-purple-300 transition-colors duration-300 ease-in-out">Duel</a>
                <a herf="/catalog" target="_blank" className="text-2xl bg-purple-700 border-t-2 text-center border-b-2 border-purple-700 py-4 font-semibold shadow-lg shadow-purple-700 hover:bg-purple-800 hover:text-purple-300 transition-colors duration-300 ease-in-out">Catalog</a>
            </nav>

            <div className="text-black bg-white rounded-md ml-200 mt-[0vw] ml-[13vw] text-lg font-semibold text-left">
                <div>
                    <p className="text-left p-4 font-extrabold text-7xl">Instrucțiuni C++</p>
                    <p className="p-3 font-semibold text-2xl">Instrucțiunile sunt porțiuni bine determinate ale unui program care stabilesc comportamentul programului – ce face acesta. Instrucțiunile se execută secvențial, în ordinea în care apar în program, și au un anumit efect. Fiecare instrucțiune (cu o excepție) se termină cu ;.
                        Se recomandă, deși nu este obligatoriu, ca pe o linie să nu fie mai mult de o instrucțiune, acest lucru sporind lizibilitatea programului. De asemenea, în cazul instrucțiunilor de control, se recomandă ca instrucțiunea subordonată să fie scrisă indentat.
                    </p>
                    <ul className="p-2">
                        <li className="hover:text-purple-800 mt-[5vw] text-3xl font-extrabold"><a class="nav-link" href="#sliniara">Structura liniară</a></li>
                            <ul className="p-3 font-bold text-xl ">
                                <li>-Instrucțiunea expresie</li>
                                <li>-Instrucțiunea declarativă</li>
                                <li>-Instrucțiunea compusă</li>
                                <li>-Instrucțiunea return</li>
                                <li>-Instrucțiunea vidă</li>
                            </ul>
                        <li className="hover:text-purple-800 text-xl "><a class="nav-link" href="#salternative">Structuri alternative</a></li>
                            <ul className="p-3">
                                <li>Instrucțiunea if</li>
                                <li>Instrucțiunea switch</li>
                            </ul>
                        <li className="hover:text-purple-800 text-xl "><a class="nav-link" herf="#srepetitive">Structuri repetitive</a></li>
                            <ul className="p-3">
                                <li  className="hover:text-purple-800"><a class="nav-link" href="#iexpresie">Instrucțiunea while</a></li>
                                <li  className="hover:text-purple-800"><a class="nav-link" href="#iexpresie">Instrucțiunea do...while</a></li>
                                <li  className="hover:text-purple-800"><a class="nav-link" href="#iexpresie">Instrucțiunea for</a></li>
                                <li  className="hover:text-purple-800"><a class="nav-link" href="#iexpresie">Instrucțiunea break</a></li>
                                <li  className="hover:text-purple-800"><a class="nav-link" href="#iexpresie">Instrucțiunea continue</a></li>
                            </ul>
                    </ul>
                </div>
                <div>
                    <div id="sliniara">
                        <h1 className="text-center p-8 mt-[5vw] text-purple-800 text-3xl">Structura liniară</h1>
                        <ul className="p-3">
                            <li className="hover:text-purple-800"><a class="nav-link" href="#iexpresie">Instrucțiunea expresie</a></li>
                            <li className="hover:text-purple-800"><a class="nav-link" href="#ideclarativa">Instrucțiunea declarativă</a></li>
                            <li className="hover:text-purple-800"><a class="nav-link" herf="#icompusa">Instrucțiunea compusă</a></li>
                            <li className="hover:text-purple-800"><a class="nav-link" href="#ireturn">Instrucțiunea return</a></li>
                            <li className="hover:text-purple-800"><a class="nav-link" href="#ivida">Instrucțiunea vidă</a></li>
                        </ul>
                    </div>
                    <div>

                        <div id="iexpresie">
                            <h1 className="text-xl text-center p-8 mt-[5vw] underline md:underline-offset-4">Instrucțiunea expresie</h1>
                            <p className="p-2">Instrucțiunea expresie este cel mai frecvent folosit tip de instrucțiune dintr-un program C++. O expresie devine instrucțiune dacă este urmată de ;.</p>
                            <p className="p-2">Notă: În C++, operațiile de intrare/ieșire folosind stream-uri sunt și ele operații. În exemplul de mai sus, cout și x sunt operanzii, iar mai mic mai mic este operatorul. Rezultat operației este o adresă de memorie, a stream-ului cout.</p>
                            <p className="p-2">Exemplu: x = 2;x ++; afiseaza-l pe x</p>
                        </div>

                        <div id="ideclarativa">
                            <h1 className="text-xl text-center p-8 mt-[5vw] underline md:underline-offset-4">Instrucțiunea declarativă</h1>
                            <p className="p-2">Printr-o instrucțiune declarativă se pot declara identificatori de un anumit tip. Identificatorii pot fi variabile, dar vom vedea mai târziu că pot fi și funcții.</p>
                            <p className="p-2 underline md:underline-offset-4">Sintaxa este : Tip_de_date Lista_identificatori;</p>
                            <p className="p-2">Tip_de_date poate fi orice tip C++ corect (int, double, etc.), iar Lista_identificatori este alcătuită din cel puțin un identificator. Dacă sunt mai mulți, se vor separa prin caracterul virgulă ,.</p>
                            <p className="p-2">Exemple: int x, y , z; double a;</p>
                        </div>

                        <div id="icompusa">
                            <h1 className="text-xl text-center p-8 mt-[5vw] underline md:underline-offset-4">Instrucțiunea compusă</h1>
                            <p className="p-2">Instrucțiunea compusă sau blocul este o grupare de declarații și instrucțiuni închise între acolade {}. Ele au fost introduse cu scopul de a folosi mai multe instrucțiuni acolo unde sintaxa cere o singură instrucțiune. Instrucţiunea compusă sau blocul sunt echivalente sintactic cu o singură instrucţiune.

                                Blocul determină și un domeniu de vizibilitate pentru identificatori. Mai precis, identificatorii declarați într-un bloc vor fi eliminați la terminarea acestuia.</p>
                            <p className="p-2">Exemple: int x = 5; int x = 7; [daca vrem sa-l afisam pe x se va afisa 7]</p>
                        </div>

                        <div id="ireturn">
                            <h1 className="text-xl text-center p-8 mt-[5vw] underline md:underline-offset-2">Instrucțiunea return</h1>
                            <p className="p-2">O instrucţiune return permite ieşirea dintr-o funcţie și transmiterea controlului apelantului funcției. O funcţie poate returna valori apelantului său, prin intermediul unei instrucţiuni return.</p>
                            <p className="p-2 underline md:underline-offset-4">Sintaxa: return(sau return expresie);</p>
                            <p className="p-2">În primul caz valoarea returnată nu este definită. În al doilea caz valoarea expresiei este returnată apelantului funcţiei.</p>
                        </div>

                        <div id="ivida">
                            <h1 className="text-xl text-center p-8 mt-[5vw] underline md:underline-offset-2">Instrucțiunea vidă</h1>
                            <p className="p-2">În numite situații, sintaxa limbajului C++ cere prezența unei instrucțiuni într-un anumit punct al programului, dar logica acestuia nu cere acest lucru. Aici intervine instrucțiunea vidă, cu următoarea sintaxă: ; </p>
                            <p className="p-2">La întâlnirea instrucțiunii vide nu se va executa nicio acțiune.</p>
                        </div>

                    </div>


                    <div id="salternative">
                        <h1 className=" text-center p-8 mt-[5vw] text-purple-800 text-3xl">Structuri alternative</h1>
                        <ul>
                            <li className="hover:text-purple-800"><a class="nav-link" href="#iif">Instrucțiunea if</a></li>
                            <li className="hover:text-purple-800"><a class="nav-link" href="#iswitch">Instrucțiunea declarativă</a></li>
                        </ul>
                    </div>

                    <div id="iif">
                        <h1 className="text-xl text-center p-8 mt-[5vw] underline md:underline-offset-4">Instrucțiunea if</h1>
                        <p className="p-2">Instrucțiunea if este cea mai utilizată structură alternativă.</p>
                        <p className="p-2">Sintaxa:</p>
                        <p className="p-2"> if (expresie) instructiunea 1;</p>
                        <p className="p-2">else instructiunea 2;</p>
                        <p className="p-2">Sau o altă variantă</p>
                        <p className="p-2"> if ( Expresie ) instrucțiune1</p>
                        <p className="p-2">Observații</p>
                        <p className="p-2">
                            Instrucțiune1 se execută numai dacă Expresie este adevărată. 
                            Instrucțiune2 se execută numai dacă Expresie este falsă. În nicio situație nu se execută ambele instrucțiuni!
                            Instrucțiune1 și Instrucțiune2 pot fi orice fel de instrucțiuni, inclusiv instrucțiunea vidă și inclusiv o altă instrucțiune if.
                            Dacă logica programului o cere, Instrucțiune1 și/sau Instrucțiune2 pot fi instrucțiuni compuse, care să conțină mai multe instrucțiuni.
                            Datorită eventualelor conversii, pentru a stabili dacă o expresie este nenulă sau nulă nu trebuie neapărat să folosim operatorii relaționali == și !=. 
                        </p>
                    </div>
                    <div id="iswitch">
                        <h1 className="text-xl text-center p-8 mt-[5vw] underline md:underline-offset-4">Instrucțiunea switch</h1>
                        <p className="p-2">Instrucțiunea switch permite executarea unor instrucțiuni, în funcție de egalitatea unei expresii cu anumite valori numerice constante:</p>
                        <p className="p-2">Sintaxa:</p>
                        <p className="p-2">Mod de execuție:</p>
                        <p className="p-2">
                            se evaluează Expresie
                            dacă valoarea expresiei este egală cu una dintre valorile constante din clauzele case, se execută instrucțiunile din grupul de instrucțiuni corespunzător, apoi se trece la instrucțiunea de după switch
                            dacă valoarea expresiei nu este egală cu niciuna dintre valorile constante din clauzele case, se verifică existența clausei default;
                            dacă există clauza default, se execută instrucțiunile din grupul de instrucțiuni corespunzător clauzei default, apoi se trece la instrucțiunea de după switch
                            dacă nu există clauza default, se trece la instrucțiunea de după switch
                        </p>
                    </div>

                    <div id="srepetitive">
                    <h1 className="text-center p-8 mt-[5vw] text-purple-800 text-3xl">Structuri repetitive</h1>
                        <ul className="p-3">
                            <li className="hover:text-purple-800"><a class="nav-link" href="#iw">Instrucțiunea while</a></li>
                            <li className="hover:text-purple-800"><a class="nav-link" href="#idw">Instrucțiunea do...while</a></li>
                            <li className="hover:text-purple-800"><a class="nav-link" herf="#ifor">Instrucțiunea for</a></li>
                            <li className="hover:text-purple-800"><a class="nav-link" href="#ibreak">Instrucțiunea break</a></li>
                            <li className="hover:text-purple-800"><a class="nav-link" href="#icont">Instrucțiunea continue</a></li>
                        </ul>
                    </div>

                    <div id class="iw">
                        <h1 className="text-xl text-center p-8 mt-[5vw] underline md:underline-offset-4"></h1>
                        <p>Reprezintă o structură repetitivă cu număr necunoscut de pași și test inițial;</p>
                        <p>Sintaxa: while (Expresie) Instructiune</p>
                    </div>

                    <div id class="idw">
                        <h1 className="text-xl text-center p-8 mt-[5vw] underline md:underline-offset-4"></h1>
                        <p>Reprezintă o structură repetitivă cu număr necunoscut de pași și test inițial;</p>
                    </div>

                    <div id class="ifor">
                        <h1 className="text-xl text-center p-8 mt-[5vw] underline md:underline-offset-4"></h1>
                        <p>Reprezintă o structură repetitivă cu număr necunoscut de pași și test inițial;</p>
                    </div>

                    <div id class="ibreak">
                        <h1 className="text-xl text-center p-8 mt-[5vw] underline md:underline-offset-4"></h1>
                        <p>Reprezintă o structură repetitivă cu număr necunoscut de pași și test inițial;</p>
                    </div>

                    <div id class="icont">
                        <h1 className="text-xl text-center p-8 mt-[5vw] underline md:underline-offset-4"></h1>
                        <p>Reprezintă o structură repetitivă cu număr necunoscut de pași și test inițial;</p>
                    </div>


                    <div>
                        <h1 className="text-xl text-center p-8 mt-[5vw] underline md:underline-offset-4">Exerciții</h1>
                        <p className="p-2">1. Să se afișeze numele zilei dintr-o săptămână în funcție de numărul ei.(dacă variabila zi are valoarea 6 sau 7 se va afișa weekend)</p>
                        <p className="p-2">2. Să se verifice dacă un număr întreg citit este par sau impar.</p>
                        <p className="p-2">3. Se citesc doua numere n m stabiliți dacă m este divizor al lui n, tratând cazul m=0. Este un exemplu de instrucțiuni if imbricate (una în alta).</p>
                    </div>
                </div>
            </div>
        </main>
)}