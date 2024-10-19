import { NavLink } from "react-router-dom";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export default function FooterSection() {

    function toTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
    }

    return (
        <div className="footerSection">
            <div className="container">
                <div className="footerInfo">
                    <div className="footerColumn">
                        <h5>Menu:</h5>
                        <NavLink to="/kozni-tvrdonova/" end onClick={toTop} className="footerLink">Domů</NavLink>
                        <NavLink to="/kozni-tvrdonova/sluzbyacenik" onClick={toTop} className="footerLink">Služby & Ceník</NavLink>
                        <NavLink to="/kozni-tvrdonova/kontakt" onClick={toTop} className="footerLink">Kontakt</NavLink>
                    </div>
                    <div className="footerColumn">
                        <h5>Kontaktní informace:</h5>
                        <a target='_blank' href='https://www.google.cz/maps/dir//%C5%BDufanova+1114%2F1,+163+00+Praha+17-%C5%98epy/@50.0682106,14.3055251,596m/data=!3m1!1e3!4m18!1m8!3m7!1s0x470bbe3ec5d93449:0xa060c91a94be1641!2s%C5%BDufanova+1114%2F1,+163+00+Praha+17-%C5%98epy!3b1!8m2!3d50.0682106!4d14.3081!16s%2Fg%2F11c2h56zs6!4m8!1m0!1m5!1m1!1s0x470bbe3ec5d93449:0xa060c91a94be1641!2m2!1d14.3081!2d50.0682106!3e3?entry=ttu&g_ep=EgoyMDI0MTAxMy4wIKXMDSoASAFQAw%3D%3D'><LocationOnIcon className="footerIcon"/> Adresa: Poliklinika Žufanova 1114/1<br/>Praha 6, Řepy 163 00</a>
                        <a target="_blank" href="tel:+420235310315"><LocalPhoneIcon className="footerIcon"/> Telefonní číslo: +420 235 310 315</a>
                        <a target="_blank" href="mailto:kozni.tvrdonova@email.cz?subject=Dotaz&body=Dobrý%20den,%20mám%20dotaz..."><EmailIcon className="footerIcon" /> E-mailová adresa: kozni.tvrdonova@email.cz</a>
                    </div>
                    <div className="footerColumn">
                        <h5>Kožní ordinace Tvrdoňová, s.r.o.</h5>
                        <p className="ico">IČO: 24247723</p>
                        <p className="copyrightDesktop">Copyright © {(new Date().getFullYear())} All rights reserved MUDr. Kateřina Tvrdoňová</p>
                        <p className="copyrightMobile">Copyright © {(new Date().getFullYear())} MUDr. Kateřina Tvrdoňová</p>
                        <p>Web Development - Ing. Tereza Chudějová</p>
                    </div>
                </div>
            </div>
        </div>
    )
}