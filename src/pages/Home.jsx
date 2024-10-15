import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { NavLink } from 'react-router-dom';

export default function Home() {
    return (
        <div className="outerBox home">

            {/* landing page s obrázkem */}
            <div className="container-fluid landingPage">
                <div className="container headingBox">
                    <h1 className="text-uppercase">Kožní ordinace<br/>Tvrdoňová</h1>
                    <p>Soukromá dermatologická klinika v Praze</p>
                    <div className="buttons">
                        <button className="button">Naše služby</button>
                        <NavLink to="/kozni-tvrdonova/kontakt" className="button">Objednat se</NavLink>
                    </div>
                </div>
                <p id="phoneNumber"><a href="tel:+420235310315" target='_blank'><LocalPhoneIcon id="phoneIcon"/> +420 235 310 315</a></p>
            </div>
            <div className="container">

            </div>
        </div>
    )
}