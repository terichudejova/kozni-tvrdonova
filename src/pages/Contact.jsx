import ApartmentIcon from '@mui/icons-material/Apartment';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import AddressMap from "../AddressMap"
import ContactFormular from '../ContactFormular';

export default function Contact() {
    return (
        <div className="outerBox kontakt">
            <div className="line"></div>
            <div className="container">
                <div className="informace">
                    <div className="left">
                        <div className="udaje">
                            <h2>Kontaktní údaje</h2>
                            <p><ApartmentIcon className='kontaktIkonka'/> Kožní ordinace Tvrdoňová, s.r.o.</p>
                            <a target='_blank' href='https://www.google.cz/maps/dir//%C5%BDufanova+1114%2F1,+163+00+Praha+17-%C5%98epy/@50.0682106,14.3055251,596m/data=!3m1!1e3!4m18!1m8!3m7!1s0x470bbe3ec5d93449:0xa060c91a94be1641!2s%C5%BDufanova+1114%2F1,+163+00+Praha+17-%C5%98epy!3b1!8m2!3d50.0682106!4d14.3081!16s%2Fg%2F11c2h56zs6!4m8!1m0!1m5!1m1!1s0x470bbe3ec5d93449:0xa060c91a94be1641!2m2!1d14.3081!2d50.0682106!3e3?entry=ttu&g_ep=EgoyMDI0MTAxMy4wIKXMDSoASAFQAw%3D%3D'><LocationOnIcon className='kontaktIkonka'/> <p>Poliklinika Žufanova 1114/1<br/>
                            Praha 6, Řepy 163 00</p></a>
                            <a target='_blank' href="tel:+420235310315"><PhoneIcon className='kontaktIkonka'/> <p>+420 235 310 315</p></a>
                            <a target='_blank' href="mailto:kozni.tvrdonova@email.cz?subject=Dotaz&body=Dobrý%20den,%20mám%20dotaz..."><EmailIcon className='kontaktIkonka'/> <p>kozni.tvrdonova@email.cz</p></a>
                            <p><ContactPageIcon className='kontaktIkonka'/> IČ: 24247723</p>
                        </div>
                        <div className="spojeni">
                            <h2>Dopravní spojení</h2>
                            <p className="bus">Cílová stanice - Bazovského:</p>
                            <ul>
                                <li>autobus <span>225</span> ze stanic metra - Nové Butovice, Luka, Stodůlky</li>
                                <li>autobus <span>164</span> ze stanic metra - Nové Butovice, Zličín</li>
                            </ul>
                            <p className="bus">Cílová stanice - Slánská:</p>
                            <ul>
                                <li>autobus <span>180</span> - od nemocnice Motol</li>
                                <li>tramvaje <span>4</span>, <span>9</span>, <span>10</span> - od metra Anděl</li>
                            </ul>
                        </div>
                    </div>
                    <div className="right">
                        <div className="formular">
                            <h2>Kontaktní formulář</h2>
                            <div className="formBox">
                                <ContactFormular />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mapa">
                    <AddressMap />
                </div>
            </div>
        </div>
    )
}