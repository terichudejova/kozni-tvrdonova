import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { NavLink } from 'react-router-dom';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import HealingIcon from '@mui/icons-material/Healing';

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
                        <p>Pacienti jiných zdravotních pojišťoven nebo nepojištění pacienti mohou být ošetřeni za přímou úhradu.</p>
                    </div>
                    <div className="derma karticka">
                        <div className="iconCircle">
                            <HealingIcon className='iconCircle_ikonka'/>
                        </div>
                        <h3>Dermatologie</h3>
                        <div className="line"></div>
                        <p>Naše soukromá kožní ordinace poskytuje běžnou lékařskou péči, která je hrazena z veřejného zdravotního pojištění.</p>
                        <h4>Prevence-vyšetření kožních znamének dermatoskopem</h4>
                        {/* <div className="line line2"></div> */}
                        <p>Klientům pojišťoven 111, 211, 201, 205 bude <span>poplatek 500Kč</span>, který uhradí v ordinaci, vrácen po předložení žádosti o příspěvek a dokladu o zaplacení z fondu prevence ZP. Klienti <span>pojišťovny 207</span> mají vyšetření <span>bez poplatku</span>.</p>
                        <NavLink to="/kozni-tvrdonova/sluzbyacenik" className='button'>Více informací</NavLink>
                    </div>
                    <div className="estetika karticka">
                        <div className="iconCircle">
                            <VaccinesIcon className='iconCircle_ikonka'/>
                        </div>
                        <h3>Estetická dermatologie</h3>
                        <div className="line"></div>
                        <p>Jedná se o nadstandardní zákroky, které nejsou hrazené zdravotními pojišťovnami a klient si je hradí sám. Nabízíme například korekci vrásek botulickým toxinem, chemický peeling, zvětšení rtů, nastřelování náušnic a další.</p>
                        <NavLink to="/kozni-tvrdonova/sluzbyacenik" className='button'>Více informací</NavLink>
                    </div>
                </div>
            </div>

        </div>
    )
}