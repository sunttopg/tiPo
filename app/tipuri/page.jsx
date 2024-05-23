import Image from 'next/image' ;
import vectori from '../../public/vectori.png' ;
import vectorvector from '../../public/vectrovector.png' ;
import vectorvector2 from '../../public/vectorvector2.png' ;
import matrice2 from '../../public/matrice2.png' ;
import parcurgere from '../../public/parcurgere.png' ;
import parcurgere2 from '../../public/parcurgere2.png' ;
import parcurgere3 from '../../public/parcurgere3.png' ;
import struct2 from '../../public/struct2.png' ;
import struct3 from '../../public/struct3.png' ;
export default function Tipuri (){

    return(
        
        <main className="bg-gray-800  p-6">

<div className=" fixed top-0 left-0 flex flex-col h-screen w-[13vw] rounded  bg-purple-600 shadow-lg">
        <div className="text-6xl bg-purple-600 shadow-lg shadow-purple-800 text-center font-extrabold py-6">Ti<span className="text-gray-800">P0</span></div>
        <a href="/culegere" target="_self" className="text-2xl text-center border-t-2 font-semibold tracking-tight hover:tracking-wide  hover:duration-150 border-purple-700 shadow-lg shadow-purple-700 py-4 hover:bg-purple-800 hover:text-purple-300  transition-colors duration-300 ease-in-out" >Lecții</a>
        <a href="/test" target="_self" className="text-2xl border-t-2 text-center border-purple-700 tracking-tight hover:tracking-wide  hover:duration-150 py-4 font-semibold shadow-lg shadow-purple-700 hover:bg-purple-800 hover:text-purple-300 transition-colors duration-300 ease-in-out">   Teste</a>
        <a href="/intreaba" target="_self" className="text-2xl border-t-2 text-center border-purple-700 tracking-tight hover:tracking-wide  hover:duration-150 py-4 font-semibold shadow-lg shadow-purple-700 hover:bg-purple-800 hover:text-purple-300 transition-colors duration-300 ease-in-out">Întreabă</a>
        <a href="/" target="_self" className="text-2xl border-t-2 text-center border-purple-700 tracking-tight hover:tracking-wide  hover:duration-150 py-4 font-semibold shadow-lg shadow-purple-700 hover:bg-purple-800 hover:text-purple-300 transition-colors duration-300 ease-in-out">Homepage </a>
      </div>

            <div className="text-black bg-white rounded-xl ml-200 mt-[0vw] w-[70vw] ml-[20vw] text-lg font-semibold text-left p-20 border-8 border-purple-600">
                <div>
                    <h1 className="text-left p-4 font-extrabold text-7xl">Tipuri de date structurate</h1>
                    <p className="p-3">Tipul de date reprezintă un concept foarte important în C/C++. Orice dată (constantă sau variabilă) este de un numit tip. Tipul datei precizează ce valori poate avea acea dată și ce operații se pot face cu ea.</p>
                    <ul className="p-2 ">
                        <li className=" hover:text-purple-800 font-extrabold tracking-tight hover:tracking-wide  hover:duration-150"><a class="nav-link" href="#tu">-Tablouri unidimensionale</a></li>
                        <li className=" hover:text-purple-800 font-extrabold tracking-tight hover:tracking-wide  hover:duration-150"><a class="nav-link" href="#tb">-Tablouri bidimensionale</a></li>
                        <li className="hover:text-purple-800 font-extrabold tracking-tight hover:tracking-wide  hover:duration-150"><a class="nav-link" href="#struct">-Struct</a></li>
                        <li className="hover:text-purple-800 font-extrabold tracking-tight hover:tracking-wide  hover:duration-150"><a class="nav-link" href="#sc">-Șiruri de caractere</a></li>
                    </ul>
                </div>

                <div id="tu">
                    <h1 className="text-center p-4  text-purple-800 text-3xl font-extrabold">Tablouri unidimensionale</h1>
                    <p className="p-2">Un tablou unidimensional care numără aparițiile unor numere, în general cifre. Tablourile unidimensionale (vectori) sunt structuri omogene de date care memorează valori în poziții consecutive.</p>
                    <p className="text-xl font-extrabold p-2 ">Un tablou unidimensional se declară în C++ astfel:</p>
                    <p className="p-2 text-xl"> tipDeBază denumire[Dimensiune];</p>
                    <Image src={vectori} alt="/" width={1000} height={3000} className='ml-[4vw]'/>
                    <p className=" text-xl font-extrabold">Exemplu: </p>
                    <p className="text-xl font-extrabold p-4 underline decoration-purple-800">int X[10];</p>
                    <p className="p-2">Observație: Nu este necesar la declarare tabloul să fie singura variabilă declarată în instrucțiunea declarativă. Următoarea instrucțiune este corectă sintactic.</p>
                    <p className="p-2 text-xl font-extrabold">Exemplu : </p>
                    <p className="text-xl font-extrabold p-4 underline decoration-purple-800">int n, X[10], m, Y[100], p;</p>


                    <p className="text-2xl  font-extrabold mt-[3vw] underline decoration-purple-800">Parcurgerea unui tablou unidimensional</p>
                    <p className="p-2">Parcurgerea unui tablou reprezintă referirea fiecărui element al tabloului, într-o anumită ordine. Referirea elementului se face prin intermediul indicelui, cu ajutorul operatorului de indexare.

                        Următorul exemplu declară un tablou cu 100 de elemente și memorează în primele n elemente ale tabloului valoarea 1. După cum știm deja, n trebuie să respecte relația n mai mic ca 100. În caz contrar, comportamentul programului devine impredictibil  foarte probabil execuția sa va fi oprită de sistemul de operare.</p>
                        
                    <Image src={parcurgere} alt="/" width={500} height={1000} className="border border-purple-800 ml-[15vw]"/>
                    <p className="p-2">De regulă, parcurgerea tabloului se face în ordinea crescătoare a indicelor, de la 0 la n-1. Făcând o analogie cu axa numerelor, putem spune că parcurgerea se face de la stânga spre dreapta. Tabloul poate fi parcurs și de la dreapta la stânga, adică în ordinea descrescătoare a indicilor, de la n-1 la 0</p>



                    <p className="text-2xl  font-extrabold mt-[3vw] underline decoration-purple-800">Adăugarea unui element într-un vector</p>
                    <p className="p-2">Adăugarea unui element într-un vector înseamnă mărirea dimensiunii logice n a vectorului și memorarea în ultimul element a noii valori. Următoarea secvențe adaugă o valoare într-un vector indexat de la 0:</p>
                    <p className="text-xl font-extrabold p-4 underline decoration-purple-800"> X[n++] = val;</p>
                    <p className="p-2 text-xl font-extrabold">Exemplu : </p>
                    <p className="p-2">Considerăm următoarea problemă :</p>
                    <p className="p-2">Se dă un șir X cu n elemente întregi, o valoare întreagă val și un număr p. Să se insereze pe poziția p în șir valoarea val.</p>
                    <p className="p-2">Idee:De data aceasta elementele vor fi mutate spre dreapta, începând cu ultimul. Elementul X[p] se înlocuiește cu noua valoare, iar dimensiunea logică a vectorului crește, fără a depăși însă dimensiunea fizică.</p>
                    <div className="p-5">
                        <p className=" text-purple-800">for(int i = n - 1 ; i = p ; i --)    X[i+1] = X[i];</p>
                        <p className=" text-purple-800">X[p] = val;</p>
                        <p className=" text-purple-800">n ++;</p>
                    </div>


                    <p className="text-2xl  font-extrabold mt-[3vw] underline decoration-purple-800">Ștergerea</p>
                    <p className="p-2">Ștergerea unui element dintr-un vector se referă la eliminarea unui element specific din vector, astfel încât structura vectorului rămâne intactă, dar fără acel element.</p>
                    <p className="p-2 text-xl font-extrabold">Exemplu : </p>
                    <p className="p-2">Considerăm următoarele probleme :</p>
                    <p className="p-2">1.Se dă un șir X cu n elemente întregi și un număr p. Să se șteargă din șirul X elementul aflat pe poziția p.</p>
                    <p className="p-2">Idee:elementele cu indici p+1, p+2, …, n-1 se mută spre stânga cu o poziție.Dimensiunea n a tabloului se micșorează cu 1</p>
                    <div className="p-5">
                        <p className=" text-purple-800">for(int i = p ; i  n - 1; i ++)   X[i] = X[i+1];</p>
                        <p className=" text-purple-800">n --;</p>
                    </div>
                    <p className="p-2">2.Considerăm un șir X cu n elemente întregi. Să se elimine din șir toate elementele pare.</p>
                    <p className="p-2">Idee:parcurgem șirul și analizăm elementul curent X[p].Dacă elementul X[p] este par, aplicăm algoritmul de mai sus pentru ștergerea elementului cu indicele p.</p>
                    <div className="p-5">
                        <div>
                            <p className=" text-purple-800">for (int p = 0 ; p  n ; p ++)</p>
                        </div>
                        <div>
                            <p className=" text-purple-800 ">verificăm dacă este par/      if(X[p] % 2 == 0)</p>
                            <p className=" text-purple-800">parcurgem/       for(int i = p ; i  n - 1; i ++)    X[i] = X[i+1];</p>
                            <p className=" text-purple-800">micșoram nr de elemente/     n --;</p>
                        </div>
                    </div>

                    <div>
                        <p className="p-2 text-xl font-extrabold">Exerciții:</p>
                        <p className="p-2">1. Să se șteargă dintr-un șir elementul aflat pe o poziție dată..</p>
                        <p className="p-2">2. Să se șteargă dintr-un vector toate elementele care sunt numere prime.</p>
                    </div>




                    <p className="text-2xl  font-extrabold  mt-[3vw] underline decoration-purple-800">Sortarea tablourilor</p>
                    <div>
                        <ul className="p-2 ">
                            <li className=" hover:text-purple-800 font-extrabold"><a class="nav-link" href="#bule">-Metoda bulelor</a></li>
                            <li className=" hover:text-purple-800 font-extrabold"><a class="nav-link" href="#sselectie">-Sortarea prin selecție</a></li>
                            <li className=" hover:text-purple-800 font-extrabold"><a class="nav-link" href="#sinsertie">-Sortare prin inserție</a></li>
                        </ul>
                    </div>

                    <div id="bule">
                        <p className="text-2xl  font-bold mt-[5vw] underline">Metoda bulelor</p>
                        <div className="p-2 ">
                            <p >-fie un vector X[] cu n elemente</p>
                            <p>-parcurgem vectorul și pentru oricare două elemente învecinate care nu sunt în ordinea dorită, le interschimbăm valorile</p>
                            <p >-după o singură parcurgere, vectorul nu se va sorta, dar putem repeta parcurgerea</p>
                            <p >-dacă la o parcurgere nu se face nicio interschimbare, vectorul este sortat</p>
                        </div>
                        <div className="p-4 text-purple-800 ">
                            <p className="p-2 ">int n, v[100];_______</p>
                            <p className="p-2 ">(citire v[] cu n elemente)___</p>
                            <p className="p-2 ">bool sortat;_________</p>
                            <p className="p-2 ">do_____________</p>
                            <p className="p-2 ">__sortat = true;_______</p>
                            <p className="p-2 ">___for(int i = 0 ; i  n - 1 ; i ++)</p>
                            <p className="p-2 ">__if(v[i] mai mare v[i+1])___</p>
                            <p className="p-2 ">__int aux = v[i];____</p>
                            <p className="p-2 ">__v[i] = v[i+1];v[i+1] = aux;</p>
                            <p className="p-2 ">__sortat = false;____</p>
                            <p className="p-2 ">while(!sortat);________</p>
                        </div>
                        <div className="text-center flex flex-row ">
                            <p className="ml-20 text-xl font-extrabold">Parcurgerea I</p>
                            <p className="ml-60 text-xl font-extrabold">Parcurgerea II</p>
                        </div>
                        <Image src={vectorvector} alt="/" width={800} height={1000} />
                    </div>

                    <div id="sselectie">
                        <p className="text-2xl  font-bold underline">Sortarea prin selecție</p>
                        <div className="p-2 ">
                            <p >-fie un vector X[] cu n elemente;</p>
                            <p >-plasăm în X[0] cea mai mică valoare din vector;</p>
                            <p >-plasăm în X[1] cea mai mică valoare rămasă;</p>
                            <p >-etc.</p>
                        </div>
                        <div className="p-4 text-purple-800">
                            <p className="p-2 ">int n, v[100];_________</p>
                            <p className="p-2 ">(citire v[] cu n elemente)_____</p>
                            <p className="p-2 ">for(int i = 0 ; i  n - 1 ; i ++)___</p>
                            <p className="p-2 ">_for(int j=i+1 ; j  n;j ++)____</p>
                            <p className="p-2 ">____if(X[i] mai mare X[j])___</p>
                            <p className="p-2 ">___int aux = X[i];X[i] = X[j];X[j] = aux;</p>
                        </div>
                    </div>

                    <div id="sinsertie">
                        <p className="text-2xl  font-bold  underline">Sortare prin inserție</p>
                        <div className="p-2 ">
                            <p >-fie un vector X[] cu n elemente;</p>
                            <p >-dacă secvența cu indici 0, 1, …, i-1 este ordonată, atunci putem insera elementul X[i] în această secvență astfel încât să fie ordonată secvența cu indici 0, 1, …, i-1, i.</p>
                            <p >-luăm pe rând fiecare element X[i] și îl inserăm în secvența din stânga sa</p>
                            <p >-la final întreg vectorul va fi ordonat</p>
                        </div>
                        <div className="flex flex-row">
                            <div className="p-8 text-purple-800">
                                <p className="p-2 ">int n, v[100];_______________</p>
                                <p className="p-2 ">(citire v[] cu n elemente)___________</p>
                                <p className="p-2 ">for(int i = 0 ; i  n - 1 ; i ++)_________</p>
                                <p className="p-2 ">_int x = a[i];int p = i - 1__________</p>
                                <p className="p-2 ">___while(p mai mare sau = 0 && a[p] mai mare x)__</p>
                                <p className="p-2 ">____a[p + 1] = a[p], p --;_______</p>
                                <p className="p-2 ">___a[p + 1] = x;_____________</p>
                            </div>
                        </div>
                        <div className="text-center flex flex-row ">
                            <p className="ml-20 text-xl font-extrabold">Sortarea prin selecție</p>
                            <p className="ml-60 text-xl font-extrabold">Sortare prin inserție</p>
                        </div>
                        <Image src={vectorvector2} alt="/" width={1000} height={3000} />
                    </div>

                    <div>
                        <p className="p-2 text-xl font-extrabold">Exerciții</p>
                        <p className="p-2">1. Să se scrie un program care ordonează crescător elementele unui vector.</p>
                        <p className="p-2">2. Se dă un vector cu n elemente, numere naturale. Afișați în ordine descrescătoare valorile divizibile cu 10 din acest vector.</p>
                        <p className="p-2">3. Se dau n numere naturale nenule. Ordonați descrescător cele n numere după numărul lor de divizori.</p>
                        <p className="p-2">4. Se dă un vector cu n elemente, numere naturale distincte. Ordonați crescător elementele situate înaintea valorii maxime din vector și descrescător elementele situate după această valoare.</p>
                    </div>

                    <p className="text-2xl  font-extrabold  mt-[3vw] underline decoration-purple-800">Interclasarea tablourilor</p>
                    <p className="p-2">Interclasarea presupune că avem două vectori ordonați (sau liste) și dorim să obținem un nou vector ordonat care să conțină toate elementele celor două vectori inițiali. .</p>
                    <p className="p-2 font-bold ">O soluție foarte eficientă este interclasarea:</p>
                    <div className="border-2 border-purple-800 ">
                            <p className="p-2">-considerăm două tablouri, cu n, respectiv m elemente, ordonate crescăto</p>
                            <p className="p-2">-cele două tablouri se parcurg concomitent;</p>
                            <p className="p-2">-se alege valoarea mai mică dintre cele două elemente curente.Se adaugă în al treilea tablou.Se avansează numai în tabloul din care am ales valoarea de adăugat.</p>
                            <p className="p-2">-parcurgerea unuia dintre cele două tablouri se încheie</p>
                            <p className="p-2">-toate elementele din celălalt tablou, neparcurse încă, sunt adăugate în tabloul destinație</p>
                            <p className="p-2">-tabloul destinație are p = n + m elemente</p>
                    </div>
                    <div className="p-4 text-purple-800">
                            <p className="p-2 ">int n, a[100000], m , b[100000], p, c[200000];_</p>
                            <p className="p-2 ">int i = 0 , j = 0 , p = 0;_______</p>
                            <p className="p-2 ">while(i mai mic n && j mai mic m)______</p>
                            <p className="p-2 ">__if(a[i] mai mic b[j])    c[p ++] = a[i ++];</p>
                            <p className="p-2 ">_else   c[p ++] = b[j ++];_______</p>
                            <p className="p-2 ">while(i mai mic n)   c[p ++] = a[i ++];____</p>
                            <p className="p-2 ">while(j mai mic m)   c[p ++] = b[j ++];____</p>
                    </div>

                    <div>
                        <p className="p-2 text-xl font-extrabold">Exerciții</p>
                        <p className="p-2">1. Se dă un șir cu n elemente, numere naturale. Determinați diferența în valoare absolută dintre numărul de valori pare din șir și numărul de valori impare din șir.</p>
                        <p className="p-2">2. Se citește un vector cu n elemente, numere naturale. Să se înlocuiască fiecare element prim din vector cu 0, apoi să se afișeze vectorul.</p>
                        <p className="p-2">3. Se citește un vector cu n elemente, numere naturale. Să se afișeze elementele din vector care sunt multipli ai ultimului element.</p>
                        <p className="p-2">4. Să se determine maximul şi minimul valorilor elementelor unui vector.</p>
                        <p className="p-2">5. Se dă un vector x cu n elemente numere întregi, și un vector y cu m elemente, de asemenea numere întregi. Să se afișeze toate elementele din vectorul x care sunt mai mari decât toate elementele din vectorul y.</p>
                        <p className="p-2">6. Se dă un șir cu n elemente numere naturale. Să se se afișeze elementele din șir care au proprietatea că primele două cifre din scrierea zecimală formează un pătrat perfect.</p>
                    </div>


                </div>

                <div id="tb">
                    <h1 className="text-center p-8 mt-[5vw] text-purple-800 text-3xl font-extrabold">Tablouri bidimensionale</h1>
                    <p className="p-2">Tablourile unidimensionale C/C++ au elemente de același tip. Astfel, tipul elementelor poate fi chiar tablou (unidimensional); elementele tabloului sunt la rândul lor tablouri unidimensionale, care au elemente de un anumit tip. Aceste tablouri se numesc bidimensionale sau matrice.</p>



                    <p className="text-2xl  font-extrabold mt-[3vw] underline decoration-purple-800">Declararea matricelor. Referirea elementelor</p>
                    <p className="p-2">Declararea tablourilor bidimensionale (matrice) face în C/C++ similar cu a tablourilor unidimensionale, dar trebuie precizate două dimensiuni fizice, maximale: numărul maxim de linii și numărul maxim de coloane ale matricei:</p>
                    <p className="p-2 text-xl">tipDeBază denumire[NumarLinii][NumarColoane];</p>
                    <Image src={matrice2} alt="/" width={1000} height={3000} className="border-4 border-purple-800"/>
                    <p className="p-2 text-xl font-extrabold">Exemplu: </p>
                    <p className="text-xl font-extrabold p-4 underline md:underline-offset-4">int A[5][10];</p>




                    <p className="text-2xl  font-extrabold  mt-[3vw] underline decoration-purple-800">Parcurgerea tablourilor bidimensionale</p>
                    <p className="p-2">Parcurgerea presupune accesarea elementelor curente ale matricei, într-o anumită ordine – de regulă aceasta se face pe linii, de sus în jos și de la stânga la dreapta:</p>
                    <div className="p-4 text-purple-800">
                            <p className="p-2 ">int n, m, A[100][100];________</p>
                            <p className="p-2 ">for(int i = 0 ; i  n ; i ++)______</p>
                            <p className="p-2 ">__for(int j = 0 ; j m ; j ++)_ A[i][j]</p>
                    </div>
                    <p className="p-2 underline text-xl">Citirea unei matrice</p>
                    <Image src={parcurgere2} alt="/" width={500} height={1000} class="border border-purple-800"/>
                    <p className="p-2">De regulă, elementele matricei se dau în ordine: de sus în jos și de la stânga la dreapta. Citirea presupune nu doar citirea elementelor matricei, dar și citirea dimensiunilor n și m.</p>
                    <p className="p-2 underline text-xl">Afișarea unei matrice</p>
                    <Image src={parcurgere3} alt="/" width={500} height={1000} class="border border-purple-800"/>
                    <p className="p-2">Pentru a obține aspectul specific tabloului bidimensional, după afișarea elementelor de fiecare linie vom trece la linia următoare a ecranului. </p>


                    <p className="text-2xl  font-extrabold mt-[3vw] ">Tablouri patratice</p>
                    <p className="p-2">Un tablou bidimensional este tablou pătratic sau matrice pătratică dacă numărul de linii este egal cu numărul de coloane.</p>
                    <p className="p-2">În această situație folosim pentru ambele dimensiuni o singură variabilă, de regulă n:</p>
                    <p className="p-4 text-xl">int n, A[100][100];</p>
                    <p className="p-2 underline text-xl">Parcurgerea elementelor de pe diagonala principală:</p>
                    <div className="p-4 text-purple-800">
                        for(int i = 0 ; i  n ; i ++)  A[i][n - 1 - i];
                    </div>
                    <p className="p-2 underline text-xl">Parcurgerea elementelor de pe diagonala secundară:</p>
                    <p className="">-Indexare de la 0</p>
                    <div className="p-4 text-purple-800">
                        for(int i = 0 ; i  n ; i ++)    A[i][n - 1 - i];
                    </div>
                    <p className="">-Indexare de la 1</p>
                    <div className="p-4 text-purple-800">
                        for(int i = 0 ; i  n ; i ++)  A[i][n + 1 - i];
                    </div>

                    <div>
                        <p className="text-2xl  font-extrabold mt-[3vw] underline decoration-purple-800">Exerciții</p>
                        <p className="p-2">1. Se dă o matrice cu n linii şi m coloane şi elemente numere naturale. Determinați suma valorilor pare din matrice.</p>
                        <p className="p-2">2. Se dă o matrice cu n linii și m coloane și elemente numere naturale. Să se determine suma elementelor de pe fiecare linie.</p>
                        <p className="p-2">3. Se dă o matrice cu n linii și m coloane și elemente numere naturale. Să se determine câte dintre elementele situate pe linii cu indici pari sunt prime.</p>
                        <p className="p-2">4. Să se determine maximul şi minimul valorilor elementelor unui vector.</p>
                    </div>

                </div>

                <div id="struct">
                    <h1 className="text-center mt-[3vw] text-purple-800 text-3xl font-extrabold">Tipul struct</h1>

                    
                    <p className="text-2xl  font-extrabold mt-[3vw] underline decoration-purple-800">Declararea unei structuri</p>
                    <p className="p-2">Sintaxa generală a declarării unui tip de date struct este următoarea:</p>
                    <Image src={struct2} alt="/" width={500} height={1000} class="border border-purple-800"/>
                    <p className="p-2 text-xl font-extrabold">Exemplu : </p>
                    <p className="p-2">Pentru a declara variabile sau în lista parametrilor formali ai unei funcții.</p>
                    <Image src={struct3} alt="/" width={500} height={1000} class="border border-purple-800"/>

                    <p className="text-2xl  font-extrabold mt-[3vw] underline decoration-purple-800">Variabile de tip structură</p>
                    <p className="p-2">În exemplul de mai sus s-a declarat o structură cu numele Persoana, dar nu s-a declarat nicio variabilă de acest tip. Pentru a declara variabile de tip Persoana putem să le adăugăm la declararea structurii:</p>
                    <div className="p-4 text-purple-800">
                            <p className="p-2 ">struct Persoana_________</p>
                            <p className="p-2 ">_char nume[21], prenume[21], sex;_</p>
                            <p className="p-2 ">_int varsta;________</p>
                            <p className="p-2 ">_double salariu;______</p>
                            <p className="p-2 ">A , B;____________</p>
                    </div>

                </div>

                <div id="sc">
                    <h1 className="text-center mt-[3vw] text-purple-800 text-3xl font-extrabold">Șiruri de caractere</h1>
                    <p className="p-2">Clasa String specific C++ este un container pentru șirurile de caractere alocat dinamic. Deși se boicotează folosirea claselor, există multe avantaje în utilizarea lor, altfel ar fi programare în C nu C++.</p>

                    <p className="text-2xl  font-extrabold mt-[3vw] underline decoration-purple-800">Declarare</p>
                    <p className="p-2">Un șir de caractere se declară în C++ astfel:</p>
                    <p className="p-2 text-xl underline">char s[11];</p>
                    <p className="p-2">S-a declarat un șir care poate memora maxim 11 caractere, cu indici 0 1 ... 10. Șirul s poate memora cel mult 10 caractere utile, după ultimul caracter util fiind memorat caracterul 0.</p>
                    <p className="text-2xl  font-extrabold mt-[3vw] underline decoration-purple-800" >Funcții pentru șiruri de caractere</p>
                        <div>
                            <ul className="p-2 ">
                                <li className=" hover:text-purple-800 font-extrabold tracking-tight hover:tracking-wide  hover:duration-150"><a class="nav-link" href="#c1">-strlen</a></li>
                                <li className=" hover:text-purple-800  font-extrabold tracking-tight hover:tracking-wide  hover:duration-150"><a class="nav-link" href="#c2">-strcpy</a></li>
                                <li className=" hover:text-purple-800  font-extrabold tracking-tight hover:tracking-wide  hover:duration-150"><a class="nav-link" href="#c3">-strncpy</a></li>
                                <li className=" hover:text-purple-800  font-extrabold tracking-tight hover:tracking-wide  hover:duration-150"><a class="nav-link" href="#c4">-strcat</a></li>
                                <li className=" hover:text-purple-800  font-extrabold tracking-tight hover:tracking-wide  hover:duration-150"><a class="nav-link" href="#c5">-strchr</a></li>
                                <li className=" hover:text-purple-800  font-extrabold tracking-tight hover:tracking-wide  hover:duration-150"><a class="nav-link" href="#c6">-strstr</a></li>
                                <li className=" hover:text-purple-800  font-extrabold tracking-tight hover:tracking-wide  hover:duration-150"><a class="nav-link" href="#c7">-strcmp</a></li>
                                <li className=" hover:text-purple-800  font-extrabold tracking-tight hover:tracking-wide  hover:duration-150"><a class="nav-link" href="#c8">-strtok</a></li>
                            </ul>      
                        </div>

                        <p  className="text-2xl  font-bold mt-[3vw] " id="c1">Strlen</p>
                        <p className="p-4 text-xl text-purple-800">std::size_t strlen( const char* str );</p>
                        <p className="p-2">Returnează lungimea șirului str, adică numărul de caractere din șirul al cărui prim caracter se află la adresa memorată în str. Caracterul nul nu se numără.</p>
                        
                        <p  className="text-2xl  font-bold mt-[3vw] " id="c2">Strcpy</p>
                        <p className="p-4 text-xl text-purple-800">char* strcpy( char* dest, const char* src );</p>
                        <p className="p-2">Copiază caracterele din șirul aflat la adresa src, inclusiv caracterul nul, în șirul al cărui prim element se află la adresa din dest.</p>
                        
                        <p  className="text-2xl  font-bold mt-[3vw] " id="c3">Strncpy</p>
                        <p className="p-4 text-xl text-purple-800">char *strncpy( char *dest, const char *src, std::size_t count );</p>
                        <p className="p-2">Copiază cel mult count caractere din șirul aflat la adresa src, în șirul al cărui prim element se află la adresa din dest.

                                În șirul dest nu se va plasa caracterul nul după cele count caractere copiate.

                                Funcția returnează adresa dest.</p>
                        
                        <p  className="text-2xl  font-bold mt-[3vw] " id="c4">Strcat</p>
                        <p className="p-4 text-xl text-purple-800">char *strcat( char *dest, const char *src );</p>
                        <p className="p-2">Adaugă (concatenează) caracterele din șirul aflat la adresa src, inclusiv caracterul nul, la șirul al cărui prim element se află la adresa din dest.

                                Funcția returnează adresa dest.</p>
                        
                        <p  className="text-2xl  font-bold mt-[3vw] " id="c5">Strchr</p>
                        <p className="p-4 text-xl text-purple-800">char *strchr( char * str, char ch );</p>
                        <p className="p-2">Caută caracterul ch în șirul al cărui prim caracter se află în memorie la adresa din str.

                                Funcția returnează adresa NULL, dacă caracterul ch nu apare în șirul str, respectiva adresa primei apariții al lui ch în str, dacă ch apare în str..</p>
                        
                        <p  className="text-2xl  font-bold mt-[3vw] " id="c6">Strstr</p>
                        <p className="p-4 text-xl text-purple-800">char *strstr( char * s, char * t );</p>
                        <p className="p-2">Caută șirul t în șirul al cărui prim caracter se află în memorie la adresa din s.

                                ul t nu apare în șirul s, respectiva adresa primei apariții al lui t în s, dacă t apare în s.</p>
                        
                        <p  className="text-2xl  font-bold mt-[vw] " id="c7">Strcmp</p>
                        <p className="p-4 text-xl text-purple-800">int strcmp( char * s, char * t );</p>
                        <p className="p-2">Compară lexicografic cele două șiruri de caractere:</p>
                        <div className="p-2">
                            <p>-dacă șirul s este lexicografi mai mic decât t funcția va returna o valoare negativă</p>
                            <p>-dacă șirul s este lexicografi mai mare decât t funcția va returna o valoare pozitivă</p>
                            <p>dacă cele două șiruri sunt identice funcția va returna valoarea 0</p>
                        </div>
                        
                        <p  className="text-2xl  font-bold mt-[3vw] " id="c8">Strtok</p>
                        <p className="p-4 text-xl text-purple-800">char *strtok( char *str, const char *sep );</p>
                        <p className="p-2">Funcția strtok extrage dintr-un sir de caractere câte un subșir (cuvânt) delimitat de caractere din șirul sep. Funcția se apelează în două moduri:</p>
                        <div className="p-2">
                            <p>-primul apel are ca parametri șirul din care se face extragerea și șirul separatorilor</p>
                            <p>la următoarele apeluri primul parametru este NULL.</p>
                        </div>
                        <p className="p-2">Rezultatul funcției strtok este adresa de început a subșirului curent extras, sau NULL dacă nu se mai poate extrage niciun subșir din șirul dat.</p>
                        

                        <div>
                        <p className="text-2xl  font-extrabold mt-[3vw] underline decoration-purple-800">Exerciții</p>
                        <p className="p-2">1. Se dă o propoziție care conține numai litere mici ale alfabetului englez și spații. Să se afișeze cuvintele din propoziție care conțin numai vocale.</p>
                        <p className="p-2">2. Se dă un șir de caractere. Să se determine câte vocale din șir sunt cuprinse între două consoane.</p>
                        <p className="p-2">3. Să se scrie un program care citeşte un şir de caractere format din litere mici ale alfabetului englez şi înlocuieşte fiecare vocală cu litera mare corespunzătoare.</p>
                        <p className="p-2">4. Se dă un șir de caractere. Sa se determine numărul scris cu cifrele existente în șirul dat. Să se afișeze numărul obținut și, pe linia următoare, toate caracterele din șir care nu fac parte din număr, cu excepția spațiilor.</p>
                    </div>
                        
                </div>
            </div>
        </main>
    )}