export default function Introducere (){

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
                    <div className="">
                        <h1 className="text-left p-4 font-extrabold text-7xl">Introducere</h1>
                            <ul className="p-2 ">
                                    <li className=" hover:text-purple-800 mt-[3vw] text-3xl tracking-tight hover:tracking-wide  hover:duration-150 font-extrabold"><a class="nav-link" href="#tipuri">Tipuri de date primare:</a></li>
                                    <ul className="font-extrabold p-2">
                                        <li className=" hover:text-purple-800 font-extrabold tracking-tight hover:tracking-wide  hover:duration-150"><a class="nav-link" href="#int">-int</a></li>
                                        <li className=" hover:text-purple-800 font-extrabold tracking-tight hover:tracking-wide  hover:duration-150"><a class="nav-link" href="#float">-float si double</a></li>
                                        <li className="hover:text-purple-800 font-extrabold tracking-tight hover:tracking-wide  hover:duration-150"><a class="nav-link" href="#char">-char</a></li>
                                        <li className="hover:text-purple-800 font-extrabold tracking-tight hover:tracking-wide  hover:duration-150"><a class="nav-link" href="#bool">-bool</a></li>
                                        <li className="hover:text-purple-800 font-extrabold tracking-tight hover:tracking-wide  hover:duration-150"><a class="nav-link" href="#void">-void</a></li>
                                    </ul>
                                    <li className="hover:text-purple-800  text-3xl font-extrabold tracking-tight hover:tracking-wide  hover:duration-150"><a class="nav-link" href="#variabile">Variabile și constante;</a></li>
                                    <li className="hover:text-purple-800  text-3xl font-extrabold tracking-tight hover:tracking-wide  hover:duration-150 "><a class="nav-link" href="#operatori">Operatorii:</a></li>
                                    <ul className="font-extrabold p-3">
                                        <li className="hover:text-purple-800 tracking-tight hover:tracking-wide  hover:duration-150 font-extrabold">
                                            <a class="nav-link" href="#oparitmetici">-Operatori aritmetici( +, -, *, /, % )</a></li>
                                        <li className="hover:text-purple-800 tracking-tight hover:tracking-wide  hover:duration-150 font-extrabold" >
                                            <a class="nav-link" href="#oprelationali">-Operatori relaționali( ==, !=  )</a></li>
                                        <li className="hover:text-purple-800 tracking-tight hover:tracking-wide  hover:duration-150 font-extrabold">
                                            <a class="nav-link" href="#oplogici">-Operatorii logici( !, ||, && )</a></li>
                                        <li className="hover:text-purple-800 tracking-tight hover:tracking-wide  hover:duration-150 font-extrabold">
                                            <a class="nav-link" href="#opatribuire">-Operatorul de atribuire( = ) și Operatorul virgulă ( , )</a></li>
                                        <li className="hover:text-purple-800 tracking-tight hover:tracking-wide  hover:duration-150 font-extrabold">
                                            <a class="nav-link" href="#interschimbare">-Interschimbarea</a></li>
                                        <li className="hover:text-purple-800 tracking-tight hover:tracking-wide  hover:duration-150 font-extrabold">
                                            <a class="nav-link" href="#op">-Operatorii ++, --</a></li>
                                        <li className="hover:text-purple-800 tracking-tight hover:tracking-wide  hover:duration-150 font-extrabold">
                                            <a class="nav-link" href="#opconditional">-Operatorul condițional ?</a></li>
                                        <li className="hover:text-purple-800 tracking-tight hover:tracking-wide  hover:duration-150 font-extrabold">
                                            <a class="nav-link" href="#opbiti">-Operatorii pe biți ( &, |, ^, ~)</a></li>
                                        <li className="hover:text-purple-800 tracking-tight hover:tracking-wide  hover:duration-150 font-extrabold">
                                            <a href="#opconversie">-Operatorul de conversie explicită</a></li>
                                        <li className="hover:text-purple-800 tracking-tight hover:tracking-wide  hover:duration-150 font-extrabold">
                                            <a class="nav-link" href="#opalti">-Alți operatori</a></li>
                                    
                                </ul>
                            </ul>
                    </div>

                    <div>
                        <p id="tipuri" className="text-2xl  font-extrabold mt-[3vw] underline decoration-purple-800">Tipuri de date primare</p>
                        <p className="p-2">În C++, tipurile de date primare (sau fundamentale) sunt tipuri de date predefinite care sunt parte integrantă a limbajului și care nu sunt construite din alte tipuri de date. Acestea sunt utilizate pentru a declara variabile care stochează date de bază, cum ar fi numere, caractere și valori logice.</p>
                        <ul className="font-extrabold p-2">
                                        <li className=" hover:text-purple-800 font-extrabold tracking-tight hover:tracking-wide  hover:duration-150"><a class="nav-link" href="#iny">-int</a></li>
                                        <li className=" hover:text-purple-800 font-extrabold tracking-tight hover:tracking-wide  hover:duration-150"><a class="nav-link" href="#float">-float si double</a></li>
                                        <li className="hover:text-purple-800 font-extrabold tracking-tight hover:tracking-wide  hover:duration-150"><a class="nav-link" href="#char">-char</a></li>
                                        <li className="hover:text-purple-800 font-extrabold tracking-tight hover:tracking-wide  hover:duration-150"><a class="nav-link" href="#bool">-bool</a></li>
                                        <li className="hover:text-purple-800 font-extrabold tracking-tight hover:tracking-wide  hover:duration-150"><a class="nav-link" href="#void">-void</a></li>
                        </ul>
                        <div>
                            <p id="int" className="text-2xl  font-bold mt-[3vw] underline decoration-purple-800">INT</p>
                            <p className="p-2">Reprezintă numere întregi. Dimensiunea și intervalul depind de implementarea specifică, dar în mod obișnuit are o dimensiune de 4 octeți (bytes).</p>
                            <p className="p-2 text-xl text-purple-800 text-bold">int a = 42;</p>

                            <p id="float" className="text-2xl  font-bold mt-[3vw] underline decoration-purple-800">FLOAT si DOUBLE</p>
                            <p className="p-2 mt-[1vw] text-xl font-bold">-Float</p>
                            <p className="p-2">Reprezintă numere în virgulă mobilă pe 4 octeți, oferind precizie redusă.</p>
                            <p className="p-2 text-xl text-purple-800 text-bold">float f = 3.14f;</p>
                            <p className="p-2 text-xl mt-[1vw]  font-bold">-Double</p>
                            <p className="p-2"> Numere în virgulă mobilă pe 8 octeți, oferind precizie mai mare decât float.</p>
                            <p className="p-2 text-xl text-purple-800 text-bold">float f = 3.14f;</p>

                            <p id="char" className="text-2xl  font-bold  mt-[3vw] underline decoration-purple-800">CHAR</p>
                            <p className="p-2">Reprezintă un singur caracter ASCII și ocupă 1 octet. Poate stoca și valori întregi mici (interval de la -128 la 127 sau de la 0 la 255 dacă este unsigned).</p>
                            <p className="p-2 text-xl text-purple-800 text-bold">char i = A;</p>

                            <p id="bool" className="text-2xl  font-bold mt-[3vw] underline decoration-purple-800">BOOL</p>
                            <p className="p-2">Reprezintă valori logice true și false. Deși nu este strict un tip de date primar tradițional (fiind introdus mai târziu în standardul C++), este considerat fundamental în programare.</p>
                            <p className="p-2 text-xl text-purple-800 text-bold">bool j = true;</p>

                            <p id="void" className="text-2xl  font-bold mt-[3vw] underline decoration-purple-800">VOID</p>
                            <p className="p-2">Tipul de date void este un instrument important în C++ pentru gestionarea funcțiilor care nu returnează valori și pentru manipularea pointerilor generici, oferind flexibilitate și claritate în cod.</p>
                            <p className="p-2 text-xl text-purple-800 text-bold">void myVar;</p>
                        </div>

                    </div>

                            <div id="variabile">
                                <h1 className="text-center mt-[3vw] text-purple-800 text-3xl font-extrabold">VARIABILE ȘI CONSTANTE</h1>

                                <p className="text-2xl  font-extrabold mt-[3vw] underline decoration-purple-800">Variabile</p>
                                <p className="p-2"> variabilă reprezintă o locație de memorie unde se află o valoare de un anumit tip. Orice variabilă este caracterizată de:</p>
                                <div className="p-2 ">
                                    <p >-<b>adresa variabilei</b>- Memoria RAM a calculatorului este adresată – fiecare octet (byte) din memorie are asociat un număr de ordine, începând de la 0. Acest număr reprezintă adresa acelui byte și se afișează implicit în baza 16.</p>
                                    <p >-<b>identificatorul variabilei</b>-reprezintă un nume pentru variabilă – legătura dintre variabilă si adresa ei. Identificatorul respectă următoarele reguli:</p>
                                        <div className="p-6 ">
                                            <p >- conține litere mari, mici ale alfabetului englez cifre și caracterul de subliniere underline. Literele mari sunt considerate diferite de cele mici, astfel că Raspuns, raspuns și RASPUNS reprezintă identificatori diferiți.</p>
                                            <p >-primul caracter nu poate fi cifră. Deși este posibil ca un identificator să înceapă cu underline , nu este recomandat, pentru a evita anumite conflicte cu identificatori de sistem.</p>
                                            <p >-identificatorul nu poate face parte din lista cuvintelor rezervate – disponibilă la finalul acestui articol.</p>
                                            <p >-nu există limite legate de lungimea unui identificator, dar numai primele 31 de caractere sunt semnificative.</p>
                                        </div>
                                    <p >-<b>tipul variabilei</b> – stabilește ce fel de valori poate să ia variabila, între ce limite sunt acestea, precum și ce operații pot fi realizate cu variabila.</p>
                                    <p >-<b>domeniul de vizibilitate</b>reprezintă zona din program în care variabila există și poate fi utilizată. Variabilele pot fi globale sau locale.</p>
                                </div>
                                <p className="p-2">În C/C++, variabilele trebuie declarate, precizând tipul și identificatorul. Sintaxa este:</p>
                                <p className="p-2 text-xl"> Tip_de_date Lista_identificatori;</p>
                                <p className="p-2 text-xl font-extrabold">Exemplu : </p>
                                <p className="text-xl font-extrabold p-4 underline decoration-purple-800">int a , x;</p>


                                <p className="text-2xl  font-extrabold mt-[3vw] underline decoration-purple-800">Constante</p>
                                <p className="p-2">Constantele sunt date care nu-și modifică valoarea în timpul execuției programului. Pot fi constante cu nume, sau constante literale, date direct prin valoarea lor.</p>
                                
                                <p className="p-2 text-1xl font-bold underline">Constante întregi</p>
                                <p className="">Reprezintă numere întregi – fără parte fracționară. Pot fi:</p>
                                <div className="ml-[3vw]">
                                    <p>-Constante zecimale – în baza 10(pot conține cifrele: 0 1 2 3 4 5 6 7 8 9;)</p>
                                    <p className="p-4">exemple: 176, -54, 0;</p>
                                    <p>-Constante octale – în baza 8(încep întotdeauna cu 0 si pot conține cifrele: 0 1 2 3 4 5 6 7;)</p>
                                    <p className="p-4">exemple: 015, 062;</p>
                                    <p>-Constante hexazecimale – în baza 16(încep întodeauna cu 0x si pot conține cifrele: 0 1 2 3 4 5 6 7 8 9 A B C D E F.)</p>
                                    <p className="p-4">exemple: 0x15, 0x6f, 0xff;</p>
                                </div>

                                <p className="p-2 text-1xl font-bold underline ">Constante reale</p>
                                <p className="">Reprezintă numere reale și se mai numesc în virgulă mobilă. Separatorul zecimal este caracterul punct . și pot apărea în două forme:</p>
                                <div className="ml-[3vw] ">
                                    <p>-Scrierea standard (fixă): -1.5 14.974</p>
                                    <p>-Scrierea științifică, cu mantisă și exponent.</p>
                                    <p className="p-4">exemple: -56.7 - -0.567 reprezintă mantisa , iar +2 reprezintă exponentul.</p>
                                </div>

                                <p className="p-2 text-1xl font-bold underline">Constante caracter – char</p>
                                <p className="">Sunt alcătuite dintr-un singur caracter, delimitat de apostroafe: ‘.</p>
                                <p className="p-4">exemple: a, B, ~, ?;</p>

                                
                                <p className="p-2 text-1xl font-bold underline">Constante șir de caractere</p>
                                <p className="p-2">Sunt delimitate de ghilimele “. Pot să conțină secvențe escape.</p>
                                <p className="text-purple-800"> ! A cu apostrof și A cu ghilimele nu reprezintă același lucru: A cu apostrof este un caracter, iar A cu ghilimele este un șir de caractere, format dintr-un singur caracter!</p>



                            </div>



                            <div class="operatori">
                                <h1 id="operatori" className="text-center p-8 mt-[5vw] text-purple-800 text-3xl font-extrabold">OPERATORII</h1>
                                <p className="p-2">O operație este alcătuită din operanzi și operator. Operanzii reprezintă datele cu care se fac operațiile, iar operatorul este simbolul care stabilește ce operație se face cu operanzii. Din punct de vedere a numărului de operanzi, operațiile (operatorii) pot fi:</p>
                                <div className="p-6">
                                    <p>-<b>Unare</b> – se aplică la un singur operand</p>
                                    <p>-<b>Binare</b>– se aplică la doi operanzi</p>
                                    <p>-<b>Ternale</b>– se aplică la trei operanzi</p>
                                </div>
                                <ul className="p-3">
                                        <li className="hover:text-purple-800 font-extrabold tracking-tight hover:tracking-wide  hover:duration-150">
                                            <a class="nav-link" href="#oparitmetici">-Operatori aritmetici( +, -, *, /, % )</a></li>
                                        <li className="hover:text-purple-800 font-extrabold tracking-tight hover:tracking-wide  hover:duration-150">
                                            <a class="nav-link" href="#oprelationali">-Operatori relaționali( ==, !=  )</a></li>
                                        <li className="hover:text-purple-800 font-extrabold tracking-tight hover:tracking-wide  hover:duration-150">
                                            <a class="nav-link" href="#oplogici">-Operatorii logici( !, ||, && )</a></li>
                                        <li className="hover:text-purple-800 font-extrabold tracking-tight hover:tracking-wide  hover:duration-150">
                                            <a class="nav-link" href="#opatribuire">-Operatorul de atribuire( = ) și Operatorul virgulă ( , )</a></li>
                                        <li className="hover:text-purple-800 font-extrabold tracking-tight hover:tracking-wide  hover:duration-150">
                                            <a class="nav-link" href="#interschimbare">-Interschimbarea</a></li>
                                        <li className="hover:text-purple-800 font-extrabold tracking-tight hover:tracking-wide  hover:duration-150">
                                            <a class="nav-link" href="#op">-Operatorii ++, --</a></li>
                                        <li className="hover:text-purple-800 font-extrabold tracking-tight hover:tracking-wide  hover:duration-150">
                                            <a class="nav-link" href="#opconditional">-Operatorul condițional ?</a></li>
                                        <li className="hover:text-purple-800 font-extrabold tracking-tight hover:tracking-wide  hover:duration-150">
                                            <a class="nav-link" href="#opbiti">-Operatorii pe biți ( &, |, ^, ~)</a></li>
                                        <li className="hover:text-purple-800 font-extrabold tracking-tight hover:tracking-wide  hover:duration-150">
                                            <a href="#opconversie">-Operatorul de conversie explicită</a></li>
                                        <li className="hover:text-purple-800 font-extrabold tracking-tight hover:tracking-wide  hover:duration-150">
                                            <a class="nav-link" href="#opalti">-Alți operatori</a></li>
                                </ul>

                                <div id="oparitmetici">
                                    <p className="text-2xl  font-extrabold mt-[3vw] underline decoration-purple-800">Operatorii aritmetici</p>

                                    <p className="p-2 text-1xl font-bold underline">Operatorii aritmetici unari</p>
                                    <p className="p-2">+ returnează valoarea operandului</p>
                                    <p className="p-2">- returnează valoarea operandului cu semn schimbat.</p>
                                    <p className="p-2 text-xl font-extrabold">Exemplu: X = 11  -X = -11 </p>

                                    <p className="p-2 text-1xl font-bold underline">Operatorii aritmetici binari</p>
                                    <div className="p-6">
                                        <p>-<b>+</b> adunarea a doua numere</p>
                                        <p>-<b>-</b> scaderea a doua numere</p>
                                        <p>-<b>*</b>  înmulțirea a două numere</p>
                                        <p>-<b>/</b>  împărțirea a două numere</p>
                                        <p>-<b>%</b> restul împărțirii a două numere întregi</p>
                                    </div>

                                    <p className="p-2 text-xl font-extrabold">Exemplu: </p>
                                    <p className="p-2">Calculați suma numerelor a=7 b=9</p>
                                    <p className="p-2">a + b == 7+9 == 16</p>

                                </div>

                                <div id="oprelationali">
                                    <p className="text-2xl  font-extrabold  mt-[3vw] underline decoration-purple-800">Operatorii relaționali</p>
                                    <p className="p-2">Sunt: mai mare , mai mic ==, != .</p>
                                    <p className="p-2">Un operator relațional stabilește dacă între două numere (operanzii) are loc o anumită relație. Rezultatul acestei operații este adevărat sau fals. Rezultatul operațiilor relaționale poate fi 0 sau 1:</p>
                                    <p className="text-purple-800 p-2"> ! Una dintre cele mai frecvente erori este folosirea pentru operația de egalitate a operatorului =, în loc de ==. Operatorul = reprezintă operația de atribuire!</p>
                                    <p className="text-purple-800 p-2"> ! O altă eroare frecventă apare la compararea mai multor numere. De la matematică suntem obișnuiți să comparăm numere astfel: a mai mic b mai mic c – condiția este adevărată dacă numerele sunt în ordine strict crescătoare. În C++, rezultatul acestei operații poate fi diferit de cel așteptat, datorită modului în care se fac operațiile.</p>

                                </div>

                                <div id="oplogici">
                                    <p className="text-2xl  font-extrabold mt-[3vw] underline decoration-purple-800">Operatorii logici</p>
                                    <p className="p-2">Sunt: !, ||, &&.</p>
                                    <p className="p-2">Operatorii logici au operanzi de tip valori de adevăr și rezultat valori de adevăr. Istoric, operațiile logice sunt legate de numele matematicianului englez George Boole, cel care a pus bazele acestei ramuri a matematicii și a inventat algebra booleană și calculul propozițional.</p>
                                    <p className="p-2">În C++, operatorii logici pot fi aplicați oricăror valori numerice, și au ca rezultat una din valorile 0 sau 1. În exemplele de mai jos vom folosi literalii true și false, de tip bool.</p>
                                    <p className="p-2 text-xl font-bold">Negația: !</p>
                                    <div class="p-4">
                                        <p>! true este false. Orice valoare nenulă negată devine 0.</p>
                                        <p>! false este true. 0 negat devine 1.</p>
                                    </div>
                                    <p className="p-2 text-xl font-bold">Disjuncția: ||</p>
                                    <div class="p-4">
                                        <p>false || false → false</p>
                                        <p>false || true → true</p>
                                        <p>true || false → true</p>
                                        <p>true || true → true</p>
                                    </div>
                                    <p className="p-2 text-xl font-bold">Conjuncția: &&</p>
                                    <div class="p-4">
                                        <p>false && false → false</p>
                                        <p>false && true → false</p>
                                        <p>true && false → false</p>
                                        <p>true && true → true</p>
                                    </div>

                                </div>
                                <div id="opatribuire">
                                <p className="text-2xl  font-extrabold mt-[3vw] underline decoration-purple-800">Operatorul de atribuire</p>
                                <p className="p-2">Atribuirea este operația prin care o variabilă primește valoarea unei expresii:</p>
                                <p className="text-xl font-extrabold p-4 underline md:underline-offset-4">variabila = expresie</p>
                                <p className="p-2">Expresia poate avea orice fel de rezultat, dacă tipul său este identic cu al variabilei sau poate fi convertit la tipul variabilei. În cazul tipurilor întregi, reale, bool, oricare dintre acestea poate fi convertit la la oricare altul, eventual cu trunchierea unor valori.</p>
                                <p className="p-2 text-xl font-extrabold">Exemplu : </p>
                                <div className="p-4">
                                    <p>int n , m ;</p>
                                    <p>n = 3</p>
                                    <p>m = n + 4</p>
                                    <p className="font-bold">Daca vrem sa-l afisam pe m ne va afisa 7( 3 + 4 );</p>
                                </div>

                                <p className="text-2xl  font-extrabold mt-[3vw] underline decoration-purple-800">Operatorul virgulă</p>
                                <p className="p-2">În anumite situații, regulile de sintaxă ale limbajului C++ solicită prezența unei singure operații, dar logica programului cere prezența mai multor operații. Acestea pot fi grupate cu ajutorul operatorului ,. Sintaxa acestei operații este;</p>
                                <p className="text-xl font-extrabold p-4 underline decoration-purple-800">expresie1 , expresie2</p>
                                <div className="p-4">
                                    <p>-se evaluează mai întâi expresie1, apoi expresie2 – important, dacă în expresie2 apar variabile care se modifică în expresie1</p>
                                    <p>-rezultatul operației este rezultatul lui expresie2</p>
                                </div>

                                </div>
                            </div>

                            <div id="interschimbare">
                                <p className="text-2xl  font-extrabold mt-[3vw] underline decoration-purple-800">Interschimbarea</p>
                                <p className="p-2">Interschimbarea este operația prin care valorile a două variabile se sechimbă între ele. De exemplu, dacă variabilele A și B au valorile 5, respectiv 7, în urma interschimbării B va avea valoarea 5 și A va avea valoarea 7.</p>
                                <p className="p-2">Interschimbarea se face prin interschimbări succesive. Există mai multe metode, dar cea mai utilizată este cunoscută sub numele de regula paharelor, deoarece este similară cu modul în care se schimbă conținutul a două pahare. În acest caz este nevoie de încă un pahar, iar în cazul interschibării variabilelor este nevoie de o variabilă auxiliară.</p>
                                <p className="p-2">Schema interschimbării este următoarea:</p>
                                <div className="p-4 font-bold">
                                    <p >int A = 5 , B = 7;</p>
                                    <p>int aux = A;</p>
                                    <p>A = B;</p>
                                    <p>B = aux;</p>
                                </div>
                            </div>

                            <div id="op">
                                <p className="text-2xl  font-extrabold mt-[3vw] underline decoration-purple-800">Operatorii ++, -- </p>
                                <p className="p-2">Se numesc operatori de de incrementare (++) și decrementare (--).</p>
                                <p className="p-2">Prin incrementarea unei variabile se înțelege mărirea valorii sale cu 1. Similar, prin decrementarea unei variabilă se înțelege micșorarea valorii sale cu 1.</p>
                                <p className="p-2">Operația de incrementare a variabilei X poate fi:</p>
                                <div className="p-4 font-bold">
                                    <p >-<b>postincrementare</b>: X ++. Efectul expresiei este mărirea valorii lui X cu 1, iar rezultatul operației este valoarea inițială a lui X.</p>
                                    <p>-<b>preincrementare</b>:  ++ X. Efectul expresiei este mărirea valorii lui X cu 1, iar rezultatul operației este chiar variabila X.</p>
                                </div>
                                <p className="p-2">Operația de decrementare a variabilei X poate fi:</p>
                                <div className="p-4 font-bold">
                                    <p >-<b>postdecrementare</b>X --. Efectul expresiei este micșorarea valorii lui X cu 1, iar rezultatul operației este valoarea inițială a lui X.</p>
                                    <p>-<b>predecrementare</b>-- X. Efectul expresiei este micșorarea valorii lui X cu 1, iar rezultatul operației este chiar variabila X.</p>
                                </div>

                            </div>

                            <div id="opconditional">
                                <p className="text-2xl  font-extrabold mt-[3vw] underline decoration-purple-800">Operatorul condițional </p>
                                <p className="p-2">Operatorul condițional este singurul operator ternar (cu trei operanzi) din C++. Sintaxa lui este:</p>
                                <p className="text-xl font-extrabold p-4 underline md:underline-offset-4">expresie1 ? expresie2 : expresie3</p>
                                <p className="p-2">Schema interschimbării este următoarea:</p>
                                <div className="p-4 font-bold">
                                    <p >-se evaluează expresie1</p>
                                    <p>-dacă rezultatul lui expresie1 este nenul (adevărat), se evaluează expresie2 și rezultatul acestei expresii va fi rezultatul operației ?</p>
                                    <p>-dacă rezultatul lui expresie1 este nul (fals), se evaluează expresie3 și rezultatul acestei expresii va fi rezultatul operației ?</p>
                                </div>
                                <p className="p-2 text-xl font-extrabold">Exemplu : </p>
                                <p className="p-2">(x % 2 == 0 ? par : impar)</p>

                            </div>

                            <div id="opbiti">
                                <p className="text-2xl  font-extrabold p-8 mt-[5vw] underline decoration-purple-800">Operatorii pe biți</p>
                                <p className="p-2">Sunt: &, |, ^, ~ .</p>
                                <p className="p-2">Operatorii pe biți reprezintă o temă avansată de programare. Ei permit manipularea directă și foarte rapidă a biților care formează reprezentarea în memorie a unei date. </p>
                            </div>

                            <div id="opconversie">
                                <p className="text-2xl  font-extrabold mt-[3vw] underline decoration-purple-800">Operatorul de conversie explicită</p>
                                <p className="p-2">În anumite situații trebuie să considerăm o expresie de un anumit tip ca fiind de alt tip. Acest lucru poate fi realizat prin operatorul de conversie:</p>
                                <p className="p-2 text-xl font-extrabold">Exemplu : </p>
                                <div className="p-4">
                                    <p>int x = 2 ;</p>
                                    <p>vrem sa afisam 7 / x;</p>
                                    <p>/3 - este impartire intreaga</p>
                                    <p>(double) x;</p>
                                    <p>3.5 - este impartire zecimala</p>
                                    <p className="font-bold">Se va afisa 3.5</p>
                                </div>
                            </div>

                            <div id="opalti">
                                <p className="text-2xl  font-extrabold mt-[3vw] underline decoration-purple-800">Alți operatori</p>
                                <p className="p-2">Limbajul C++ conține și alți operatori, dintre care:</p>
                                <div className="p-4">
                                    <p>-( ) – modificarea priorității unei operații, apel de funcție</p>
                                    <p>-[ ] – indexarea unui tablou</p>
                                    <p>-., - – acces la membrii unei structuri</p>
                                    <p>-&, * – referențiere (determinarea adresei unei variabile), dereferențiere (accesare variabilei de la o adresă)</p>
                                    <p>-new, delete – alocare și dealocarea memoriei</p>
                                    <p>-:: operatorul de rezoluție</p>
                                </div>

                            </div>

                            <div>
                        <p className="text-2xl  font-extrabold mt-[3vw] underline decoration-purple-800">Exerciții</p>
                        <p className="p-2">1. Se citește n număr natural. Calculați suma numerelor naturale mai mici sau egale cu n.</p>
                        <p className="p-2">2. Să se scrie un program care citește numărul natural n și determină valoarea lui n!=1*2*3*...*n.</p>
                        <p className="p-2">3. Se dă numărul natural nenul n. Să se determine produsul primelor n numere impare.</p>
                        <p className="p-2">4. Să se scrie un program care citește numărul natural n și determină suma primelor n pătrate perfecte nenule.</p>
                </div>

               </div>
        </main>
     )}