import { NavLink } from "react-router-dom";


export default function ServicesAndPrices() {

    const scrollToDerma = () => {
        const element = document.getElementById('dermatologickeSluzby');
        const offset = -100; // kolik px chceš posunout
        const yPosition = element.getBoundingClientRect().top + window.pageYOffset + offset;
  
        window.scrollTo({
            top: yPosition,
            behavior: 'smooth'
        });
    };

    const scrollToEstetika = () => {
        const element = document.getElementById('estetickeSluzby');
        const offset = -100; // kolik px chceš posunout
        const yPosition = element.getBoundingClientRect().top + window.pageYOffset + offset;
  
        window.scrollTo({
            top: yPosition,
            behavior: 'smooth'
        });
    };

    const scrollToCenik = () => {
        const element = document.getElementById('cenik');
        const offset = -100; // kolik px chceš posunout
        const yPosition = element.getBoundingClientRect().top + window.pageYOffset + offset;
  
        window.scrollTo({
            top: yPosition,
            behavior: 'smooth'
        });
    };


    return (
        <div className="outerBox servicesPrices">

            {/* landing page */}
             <div className="landingPage">
                <div className="container">
                    <div className="boxes">
                        <div className="dermaBox">
                            <h5>Dermatologie</h5>
                            <div className="line"></div>
                            <p>Naše soukromá kožní ordinace poskytuje běžnou lékařskou péči, která je hrazena z&nbsp;veřejného zdravotního pojištění.</p>
                            <button className="button" onClick={scrollToDerma}>Konkrétní služby</button>
                        </div>
                        <div className="estetikaBox">
                            <h5>Estetická dermatologie</h5>
                            <div className="line"></div>
                            <p>Jedná se o&nbsp;nadstandardní zákroky, které nejsou hrazené zdravotními pojišťovnami. Klient si je hradí sám.</p>
                            <button className="button" onClick={scrollToEstetika}>Konkrétní služby</button>
                        </div>
                    </div>
                    <button className="button" onClick={scrollToCenik}>Ceník</button>
                </div>
            </div>

            {/* dermatologické služby */}
            <div className="dermatologickeSluzby" id="dermatologickeSluzby">
                <div className="container">
                    <h2>Dermatologie</h2>
                    <div class="alert alert-dismissible">
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" style={{fontSize: "15px"}}></button>
                        <p><strong>Upozornění!</strong> Omlouváme se, momentálně z kapacitních důvodů <span>nepřijímáme</span> do péče hrazené z prostředků <span>veřejného zdravotního pojištění nové pacienty</span>. Toto opatření se <span>netýká placených zákroků</span> v rámci korektivní a estetické dermatologie.</p>
                    </div>
                    <p>Naše soukromá kožní ordinace poskytuje běžnou lékařskou péči, která je hrazena z veřejného zdravotního pojištění. Zařízení má uzavřenou smlouvu s těmito zdravotními pojišťovnami:</p>
                    <ul>
                        <li><span>111</span> - Všeobecná zdravotní pojišťovna</li>
                        <li><span>201</span> - Vojenská zdravotní pojišťovna</li>
                        <li><span>205</span> - Česká průmyslová zdravitní pojišťovna</li>
                        <li><span>207</span> - Oborová zdravotní pojišťovna</li>
                        <li><span>211</span> - Zdravotní pojišťovna Ministerstva vnitra</li>
                    </ul>
                    <p>Pacienti jiných zdravotních pojišťoven nebo nepojištění pacienti mohou být ošetřeni za přímou úhradu.</p>
                    <h3>Nabízíme:</h3>
                    <div className="konkretniSluzby">
                        <div className="sluzba prvni">
                            <p>Klinické vyšetření</p>
                        </div>
                        <div className="sluzba druha">
                            <p>Běžná diagnostika a léčba kožních chorob</p>
                        </div>
                        <div className="sluzba treti">
                            <p>Diagnostika pigmentových projevů pomocí dermatoskopu</p>
                        </div>
                        <div className="sluzba ctvrta">
                            <p>Drobné chirurgické zákroky spojené s léčbou a diagnostikou kožních chorob - probatorní excize, abraze, kauterizace, kryoterapie a dále výkony prováděné vysokovýkonným CO2 laserem (laserová ošetření nejsou hrazena zdravotními pojišťovnami)</p>
                        </div>
                        <div className="sluzba pata">
                            <p>HIV Test - jedná se o rychlý imunotest, sloužící k prokázání protilátek proti viru HIV (typ 1 i 2) jenž je původcem onemocnění AIDS - vzorek se získává stěrem ze sliznice dutiny ústní (nejedná se tedy o injekční odběr krve) a výsledek testu je znám po 20 minutách</p>
                        </div>
                    </div>
                    <NavLink to="/kozni-tvrdonova/kontakt" className="button">Objednat se</NavLink>
                </div>
            </div>

            {/* estetické služby */}
            <div className="estetickeSluzby" id="estetickeSluzby">
                <div className="container">
                    <h2>Estetická dermatologie</h2>
                    <p>Jedná se o nadstandardní zákroky, které nejsou hrazené zdravotními pojišťovnami. Klient si je hradí sám.</p>
                    <h3>Nabízíme:</h3>
                    <div className="konkretniSluzby">
                        <div className="sluzba prvni">
                            <p>Drobné chirurgické zákroky prováděné z kosmetických důvodů – odstranění některých typů kožních výrůstků, pigmentových projevů, mateřských znamének, projevů cévního původu</p>
                            <p><span>Metody odstranění:</span> vysokovýkonný CO2 laser, radiofrekvence, elektrokauter</p>
                        </div>
                        <div className="sluzba druha">
                            <p>Odstranění xanthelasmat</p>
                        </div>
                        <div className="sluzba treti">
                            <p>Sklerotizace metličkových varixů</p>
                        </div>
                        <div className="sluzba ctvrta">
                            <p>Korekce vrásek výplňovými materiály (kyselina hyaluronová)</p>
                        </div>
                        <div className="sluzba pata">
                            <p>Korekce vrásek botulickým toxinem</p>
                        </div>
                        <div className="sluzba sesta">
                            <p>Chemický peeling</p>
                        </div>
                        <div className="sluzba sedma">
                            <p>Léčba nadměrného pocení botulickým toxinem</p>
                        </div>
                        <div className="sluzba osma">
                            <p>Korekce a zvětšení rtů výplňovými materiály</p>
                        </div>
                        <div className="sluzba devata">
                            <p>Korekce jizev</p>
                        </div>
                        <div className="sluzba desata">
                            <p>Nastřelování naušnic systémem Blomdahl</p>
                        </div>
                        <div className="sluzba jedenacta">
                            <p>Poradna péče o pleť a kosmetologická poradna</p>
                        </div>
                    </div>
                    <NavLink to="/kozni-tvrdonova/kontakt" className="button">Objednat se</NavLink>
                </div>
            </div>

            {/* ceník */}
            <div className="cenik" id="cenik">
                <div className="container">
                    <h2>Ceník</h2>
                    <p>Na všechny placené korektivní zákroky je nutné předem se objednat na telefonním čísle <span><a href="tel:+420235310315" target="_blank">+420 235 310 315</a></span>.</p>
                    <div id="accordion">
                        <div class="card">
                            <div class="card-header">
                            <a class="btn" data-bs-toggle="collapse" href="#collapseOne">
                                Odstranění drobných kožních útvarů a znamének laserem
                            </a>
                            </div>
                            <div id="collapseOne" class="collapse" data-bs-parent="#accordion">
                            <div class="card-body">
                                <p>absolutně šetrná metoda vhodná k řezání a odpaření tkáně, rána se nehojí klasickou jizvou</p>
                                <p className="cena">1 projev od 1200 Kč</p>
                            </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header">
                            <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseTwo">
                                Odstranění drobných kožních útvarů elektrokauterem
                            </a>
                            </div>
                            <div id="collapseTwo" class="collapse" data-bs-parent="#accordion">
                            <div class="card-body">
                                <p>bez místního znecitlivění</p>
                                <p className="cena">od 500 Kč</p>
                            </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header">
                            <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseThree">
                                Odstranění drobných kožních útvarů radiofrekvencí
                            </a>
                            </div>
                            <div id="collapseThree" class="collapse" data-bs-parent="#accordion">
                            <div class="card-body">
                                <p>netraumatická metoda vhodná k řezání, koagulaci a odpaření tkáně, rána se nehojí klasickou jizvou</p>
                                <p className="cena">1 projev od 800 Kč</p>
                            </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header">
                            <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseFour">
                                Odstranění xanthelasmat (laser, radiofrekvence)
                            </a>
                            </div>
                            <div id="collapseFour" class="collapse" data-bs-parent="#accordion">
                            <div class="card-body">
                                <p className="cena">od 2000 Kč</p>
                            </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header">
                            <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseFive">
                                Chemický peeling
                            </a>
                            </div>
                            <div id="collapseFive" class="collapse" data-bs-parent="#accordion">
                            <div class="card-body">
                                <p>Systémem AHA-kyselinami</p>
                                <p className="cena">1 sezení za 1500 Kč</p>
                                <p>Systémem Retinolpeel</p>
                                <p className="cena">1 sezení za 2000 Kč</p>
                            </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header">
                            <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseSix">
                                Ošetření frakčním laserem
                            </a>
                            </div>
                            <div id="collapseSix" class="collapse" data-bs-parent="#accordion">
                            <div class="card-body">
                                <p>odstraňování jizev</p>
                                <p className="cena">1 sezení od 1200 Kč</p>
                            </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header">
                            <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseSeven">
                                Aplikace výplňových materiálů
                            </a>
                            </div>
                            <div id="collapseSeven" class="collapse" data-bs-parent="#accordion">
                            <div class="card-body">
                                <p className="cena">od 6500 Kč dle množství a druhu materiálu</p>
                            </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header">
                            <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseEight">
                                Korekce a zvětšení rtů výplňovými materiály
                            </a>
                            </div>
                            <div id="collapseEight" class="collapse" data-bs-parent="#accordion">
                            <div class="card-body">
                                <p className="cena">od 7500 Kč dle množství a druhu materiálu</p>
                            </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header">
                            <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseNine">
                                Chirurgická excize šitá
                            </a>
                            </div>
                            <div id="collapseNine" class="collapse" data-bs-parent="#accordion">
                            <div class="card-body">
                                <p className="cena">od 1000 Kč</p>
                            </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header">
                            <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseTen">
                                Poradna pro péči o pleť
                            </a>
                            </div>
                            <div id="collapseTen" class="collapse" data-bs-parent="#accordion">
                            <div class="card-body">
                                <p className="cena">konzultace 500 Kč</p>
                            </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header">
                            <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseEleven">
                                Sklerotizace mikrovarixů (metliček)
                            </a>
                            </div>
                            <div id="collapseEleven" class="collapse" data-bs-parent="#accordion">
                            <div class="card-body">
                                <p className="cena">1. ošetření 3000 Kč</p>
                                <p className="cena">2. ošetření od 2500 Kč</p>
                            </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header">
                            <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseTwelve">
                                Aplikace botulického toxinu ke korekci vrásek
                            </a>
                            </div>
                            <div id="collapseTwelve" class="collapse" data-bs-parent="#accordion">
                            <div class="card-body">
                                <p className="cena">1 lokalita od 4000 Kč</p>
                            </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header">
                            <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseThirteen">
                                Léčba nadměrného pocení (hyperhidrozy) botulickým toxinem
                            </a>
                            </div>
                            <div id="collapseThirteen" class="collapse" data-bs-parent="#accordion">
                            <div class="card-body">
                                <p className="cena">od 11000 Kč</p>
                            </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header">
                            <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseFourteen">
                                Nastřelování náušnic systémem Blomdahl
                            </a>
                            </div>
                            <div id="collapseFourteen" class="collapse" data-bs-parent="#accordion">
                            <div class="card-body">
                                <p className="cena">1 náušnice + aplikace 500 Kč</p>
                                <p className="cena">2 náušnice + aplikace 800 Kč</p>
                            </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header">
                            <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseFifteen">
                                Aplikace místní anestezie-injekční
                            </a>
                            </div>
                            <div id="collapseFifteen" class="collapse" data-bs-parent="#accordion">
                            <div class="card-body">
                                <p>Emla, jednorázový materiál</p>
                                <p className="cena">200 Kč</p>
                            </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header">
                            <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseSixteen">
                                Test na HIV
                            </a>
                            </div>
                            <div id="collapseSixteen" class="collapse" data-bs-parent="#accordion">
                            <div class="card-body">
                                <p className="cena">700 Kč</p>
                            </div>
                            </div>
                        </div>
                    </div>

                    <NavLink to="/kozni-tvrdonova/kontakt" className="button">Objednat se</NavLink>
                </div>
            </div>


        </div>
    )
}