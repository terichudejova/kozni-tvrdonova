export default function Contact() {
    return (
        <div className="outerBox kontakt">
            <div className="container">
                <div className="informace">
                    <div className="left">
                        <div className="udaje">
                            <h2>Kontaktní údaje</h2>
                            <p>Kožní ordinace Tvrdoňová, s.r.o.</p>
                            <p><a>Poliklinika Žufanova 1114/1<br/>
                            Praha 6, Řepy 163 00</a></p>
                            <p><a>+420 235 310 315</a></p>
                            <p><a href="">kozni.tvrdonova@email.cz</a></p>
                            <p>IČ: 24247723</p>
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
                        </div>
                    </div>
                </div>
                <div className="mapa"></div>
            </div>
        </div>
    )
}