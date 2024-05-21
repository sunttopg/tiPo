export default function Introducere (){

    return(
        <main className=" bg-gray-800 p-6">

<div className=" fixed top-0 left-0 flex flex-col h-screen w-[13vw] rounded  bg-purple-600 shadow-lg">
        <div className="text-3xl shadow-lg shadow-purple-800 text-center font-semibold py-4">TiP0</div>
        <a href="/culegere" target="_self" className="text-2xl text-center border-t-2 font-semibold border-purple-700 shadow-lg shadow-purple-700 py-4 hover:bg-purple-800 hover:text-purple-300  transition-colors duration-300 ease-in-out" >Culegere</a>
        <a href="/test" target="_self" className="text-2xl border-t-2 text-center border-purple-700 py-4 font-semibold shadow-lg shadow-purple-700 hover:bg-purple-800 hover:text-purple-300 transition-colors duration-300 ease-in-out">   Test</a>
        <a href="/intreaba" target="_self" className="text-2xl border-t-2 text-center border-purple-700 py-4 font-semibold shadow-lg shadow-purple-700 hover:bg-purple-800 hover:text-purple-300 transition-colors duration-300 ease-in-out">Intreaba</a>
       
      </div>
        <div className="bg-white text-black ml-200  ml-[13vw]">     
            <div className="hero">
                    <p>Un tip de date este o clasificare care dicteaz ce tip de valoare poate lua o variabila si ce operatiuni pot fi efectuate asupra acesteia.Tipuri:</p>
                    <ul className="tipuri">
                        <li className="nav-item">
                            <a className="nav-link" href="#tipuri">Tipuri de date primare</a></li>
                    </ul>
                <p>O variabilă este o modalitate de a se referi la o zonă de stocare într-un program de calculator. Această locație de memorie deține valori - numere, text sau tipuri mai complicate de date.</p>
                <ul className="variabile">
                    <li className="link">
                        <a className="nav-link" href="#vcantitative">Variabile cantitative</a></li>
                    <li className="link">
                        <a className="nav-link" href="#vcategoriale">Variabile categoriale</a></li>
                </ul>
                <p>O constanta este similara unei variabile (in sensul ca este un identificator pentru o valoare), dar spre deosebire de variabile, valorile constantelor nu se pot schimba in timpul executiei scriptului.</p>
                <ul className="constante">
                    <li className="link">
                        <a className="nav-link" href="#cdetipintreg">Constante de tip întreg</a></li>
                    <li className="link">
                        <a className="nav-link" href="#cflotante">Constantele flotante sau reale</a></li>
                    <li className="link">
                        <a className="nav-link" href="#ccaractere">Constante de caractere</a></li>
                    <li className="link">
                        <a className="nav-link" href="#csirecaractere">Constante de șir de caractere</a></li>
                    <li className="link">
                        <a className="nav-link" href="#cenumerare">Constante de enumerare</a></li>
                </ul>
                <p>O operație este alcătuită din operanzi și operator. Operanzii reprezintă datele cu care se fac operațiile, iar operatorul este simbolul care stabilește ce operație se face cu operanzii.</p>
                <ul className="operatori">
                    <li className="link">
                        <a className="nav-link" href="#oparitmetici">Operatori aritmetici( +, -, *, /, % )</a></li>
                    <li className="link">
                        <a className="nav-link" href="#oprelationali">Operatori relaționali( ==, !=  )</a></li>
                    <li className="link">
                        <a className="nav-link" href="#oplogici">Operatorii logici( !, ||, && )</a></li>
                    <li className="link">
                        <a className="nav-link" href="#opatribuire">Operatorul de atribuire( = ) și Operatorul virgulă ( , )</a></li>
                    <li className="link">
                        <a className="nav-link" href="#interschimbare">Interschimbarea</a></li>
                    <li className="link">
                        <a className="nav-link" href="#op">Operatorii ++, --</a></li>
                    <li className="link">
                        <a className="nav-link" href="#opconditional">Operatorul condițional ?</a></li>
                    <li className="link">
                        <a className="nav-link" href="#opbiti">Operatorii pe biți ( &, |, ^, ~)</a></li>
                    <li className="link">
                        <a className="nav-link" href="#opconversie">Operatorul de conversie explicită</a></li>
                    <li className="link">
                        <a className="nav-link" href="#opalti">Alți operatori</a></li>
                </ul>
            </div>
            <div className="container-fluid">
                <h1 id="tipuri">Tipuri de date</h1>
                <p>
                        Tipul int
                        Tipurile float și double
                        Tipul char
                        Tipul pointer
                        Tipul bool
                        Tipul void
                </p>
                <h2>Tipul int </h2>
                <p>Permite memorarea de valori întregi – pozitive sau negative;
                    o dată de tip int ocupă (de regulă) 4 octeți; astfel, poate memora valori întregi din [−231,231−1]
                    , adică [−2.147.483.648,2.147.483.647]</p>
                <p>Exemplu: int n=100;</p>
                <h2>Tipurile float și double</h2>
                <p> -memorează numere reale;
                    -separatorul zecimal este punctul .
                    -se mai numesc tipuri în virgulă mobilă;
                    -datele reale pot fi date în forma fixă sau în forma științifică (exponențială);
                    -tipul float se reprezinta pe 4 octeți;
                    -tipul double se reprezinta pe 8 octeți;
                </p>
                <p>Exemplu: float p = 3.14, r = 2.5; double A = p * r * r;</p>
                <h2>Tipul char</h2>
                <p> -se folosește pentru caractere ASCII;
                    -stochează un singur caracter;
                    -se reprezintă pe 1 octet;
                    -caracterele sunt delimitate prin apostrof ‘;
                </p>
                <p>Exemplu: char c = A; </p>
                <h2>Tipul pointer</h2>
                <p>o dată de tip pointer memorează o adresă de memorie – de exemplu adresa unei variabile;</p>
                <h2>Tipul bool</h2>
                <p>Anumite operații care se fac cu datele au ca rezultat valori de adevăr: adevărat sau false.

                tipul bool conține două valori: true și false ;
                se reprezintă (de regulă) pe 1 octet;
                valorile numerice ale lor sunt 1 și 0;
                se folosesc în instrucțiuni condiționale și repetitive
                </p>
                <p>Exemplu: bool pp = false;</p>
                <h2>Tipul void</h2>
                <p>cuvântul void înseamnă “nimic” sau “fără valoare”;
                datele de tip void nu au valori și nu se pot face cu ele operații;
                îl folosim pentru funcții și pointeri
                </p>
            </div>
            </div>

        </main>
     )}