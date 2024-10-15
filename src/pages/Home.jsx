import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { NavLink } from 'react-router-dom';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import HealingIcon from '@mui/icons-material/Healing';
// import Carousel from '../Carousel';

const scrollToSection = () => {
    const element = document.getElementById('sluzbyPage');
    const offset = -200; // kolik px chceš posunout
    const yPosition = element.getBoundingClientRect().top + window.pageYOffset + offset;
  
    window.scrollTo({
      top: yPosition,
      behavior: 'smooth'
    });
  };

export default function Home() {
    return (
        <div className="outerBox home">

            {/* landing page s obrázkem */}
            <div className="landingPage">
                <div className="container headingBox">
                    <h1 className="text-uppercase">Kožní ordinace<br/>Tvrdoňová</h1>
                    <p>Soukromá dermatologická klinika v Praze</p>
                    <div className="buttons">
                        <a className="button" onClick={scrollToSection}>Naše služby</a>
                        <NavLink to="/kozni-tvrdonova/kontakt" className="button">Objednat se</NavLink>
                    </div>
                </div>
                <p id="phoneNumber"><a href="tel:+420235310315" target='_blank'><LocalPhoneIcon id="phoneIcon"/> +420 235 310 315</a></p>
            </div>

            {/* Sekce info a služby */}
            <div className="sluzby" id='sluzbyPage'>
                <div className="container">
                    <h2>Naše služby</h2>
                    <p>Jsme <span>soukromá dermatologická ordinace</span> zaměřená na&nbsp;diagnostiku a&nbsp;léčbu kožních chorob. Běžná lékařská péče je hrazená ze&nbsp;<span>všeobecného zdravotního pojištění</span>. Nadstandardní zákroky, většinou z&nbsp;oboru estetické dermatologie, jsou na&nbsp;přímou platbu. Naší snahou je poskytnout vám jak léčbu vaší nemocné kůže a&nbsp;péči o&nbsp;ni, tak i&nbsp;rady a zákroky, jak si ji můžete uchovat <span>zdravou a&nbsp;krásnou</span>.</p>
                </div>
                <div className="sluzbyCards container">
                    <div className="pojistovny karticka">
                        <div className="iconCircle">
                            <LocalHospitalIcon className='iconCircle_ikonka'/>
                        </div>
                        <h3>Smlouvy s pojišťovnami</h3>
                        <div className="line"></div>
                        <ul>
                            <li><span>111</span> - Všeobecná zdravotní pojišťovna</li>
                            <li><span>201</span> - Vojenská zdravotní pojišťovna</li>
                            <li><span>205</span> - Česká průmyslová zdravitní pojišťovna</li>
                            <li><span>207</span> - Oborová zdravotní pojišťovna</li>
                            <li><span>211</span> - Zdravotní pojišťovna Ministerstva vnitra</li>
                        </ul>
                        <p>Pacienti jiných zdravotních pojišťoven nebo nepojištění pacienti mohou být ošetřeni za&nbsp;přímou úhradu.</p>
                    </div>
                    <div className="derma karticka">
                        <div className="iconCircle">
                            <HealingIcon className='iconCircle_ikonka'/>
                        </div>
                        <h3>Dermatologie</h3>
                        <div className="line"></div>
                        <p>Naše soukromá kožní ordinace poskytuje běžnou lékařskou péči, která je hrazena z&nbsp;veřejného zdravotního pojištění.</p>
                        <h4>Prevence-vyšetření kožních znamének dermatoskopem</h4>
                        {/* <div className="line line2"></div> */}
                        <p>Klientům pojišťoven 111, 211, 201, 205 bude <span>poplatek 500Kč</span>, který uhradí v&nbsp;ordinaci, vrácen po předložení žádosti o&nbsp;příspěvek a&nbsp;dokladu o&nbsp;zaplacení z&nbsp;fondu prevence ZP. Klienti <span>pojišťovny 207</span> mají vyšetření <span>bez poplatku</span>.</p>
                        <NavLink to="/kozni-tvrdonova/sluzbyacenik" className='button'>Více informací</NavLink>
                    </div>
                    <div className="estetika karticka">
                        <div className="iconCircle">
                            <VaccinesIcon className='iconCircle_ikonka'/>
                        </div>
                        <h3>Estetická dermatologie</h3>
                        <div className="line"></div>
                        <p>Jedná se o&nbsp;nadstandardní zákroky, které nejsou hrazené zdravotními pojišťovnami a&nbsp;klient si je hradí sám. Nabízíme například korekci vrásek botulickým toxinem, chemický peeling, zvětšení rtů, nastřelování náušnic a&nbsp;další.</p>
                        <NavLink to="/kozni-tvrdonova/sluzbyacenik" className='button'>Více informací</NavLink>
                    </div>
                </div>
            </div>

            {/* sekce Náš tým */}
            <div className="tym">
                <div className="container">
                    <h2>Náš tým</h2>
                    <p>V naší dermatologické ordinaci klademe důraz na&nbsp;<span>individuální přístup</span> a&nbsp;<span>profesionální péči</span> o&nbsp;každého pacienta. Snažíme se vytvořit prostředí, kde se budete cítit v&nbsp;pohodlí a&nbsp;s&nbsp;jistotou, že vaše zdraví a&nbsp;vzhled jsou v&nbsp;těch nejlepších rukou. Naše ordinace je vedena <span>zkušenou dermatoložkou</span>, která se specializuje na&nbsp;<span>diagnostiku a&nbsp;léčbu kožních onemocnění</span> i&nbsp;na&nbsp;<span>estetickou dermatologii</span>. Po jejím boku působí odborná sestra, která se s&nbsp;maximální péčí postará o&nbsp;vaši pohodu při každé návštěvě. Společně se věnujeme nejen léčbě, ale také <span>prevenci a&nbsp;péči</span> o&nbsp;zdravou a&nbsp;krásnou pokožku.</p>
                    <div className="medailonky">
                        <div className="medailonek">
                            <div className="imgCase"><img src='images/doktorka.jpeg'/></div>
                            <div className="title">
                                <h4>MUDr. Kateřina Tvrdoňová</h4>
                                <p>Lékařka</p>
                                <div className="line"></div>
                            </div>
                            <p>V roce 1993 promovala na&nbsp;<span>1.&nbsp;lékařské fakultě UK v&nbsp;Praze</span>. V&nbsp;témže roce nastoupila na&nbsp;<span>2.&nbsp;kožní kliniku VFN v&nbsp;Praze</span>, zde pracovala jako sekundární lékařka a&nbsp;specializovala se na&nbsp;obor dermatochirurgie. Po <span>I.&nbsp;atestaci</span> v&nbsp;roce 1996 vedla ambulanci pro kožní choroby z&nbsp;povolání a&nbsp;alergologii, připojila se ke&nbsp;kolektivu lékařek věnujících se problematice pigmentových projevů a&nbsp;léčbě maligního melanomu. V roce 2002 složila <span>atestaci 2. stupně v&nbsp;oboru dermatovenerologie</span>. V letech 2002 až 2012 pracovala v&nbsp;laserovém centru – <span>Medical Laser Centre</span> na&nbsp;Praze 10. Věnuje se <span>korektivní dermatologii</span>, <span>estetické medicíně</span> a&nbsp;<span>kožní laserové terapii</span>. Od ledna 2009 má privátní praxi na&nbsp;Praze&nbsp;6.</p>
                        </div>
                        <div className="medailonek">
                            <div className="imgCase"><img src='images/sestricka.png'/></div>
                            <div className="title">
                                <h4>Barbora Šeráková</h4>
                                <p>Zdravotní sestra</p>
                                <div className="line"></div>
                            </div>
                            <p>V roce 1991 maturovala v&nbsp;oboru zdratovní sestra. V&nbsp;témže roce nastoupila na&nbsp;<span>jednotku intenzivní péče III.&nbsp;chirurgické kliniky</span> pod&nbsp;vedením prof.&nbsp;Pafka, kde pracovala 12&nbsp;let. V&nbsp;roce 1997 úspěšně absolvovala <span>postgraduální studium ARIP-anestezie, resuscitace, intenzivní péče</span>. Od roku 2009 pracuje v&nbsp;soukromé kožní ordinaci na Praze&nbsp;6.</p>
                        </div>
                    </div>
                </div>

                {/* galerie */}
                <div className="carouselBox">
                    {/* <div className="carouselGallery"><Carousel /></div> */}
                </div>
            </div>

        </div>
    )
}