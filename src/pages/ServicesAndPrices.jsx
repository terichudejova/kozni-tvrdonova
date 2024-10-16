export default function ServicesAndPrices() {
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
                            <button className="button">Konkrétní služby</button>
                        </div>
                        <div className="estetikaBox">
                            <h5>Estetická dermatologie</h5>
                            <div className="line"></div>
                            <p>Jedná se o&nbsp;nadstandardní zákroky, které nejsou hrazené zdravotními pojišťovnami. Klient si je hradí sám.</p>
                            <button className="button">Konkrétní služby</button>
                        </div>
                    </div>
                    <button className="button">Ceník</button>
                </div>
            </div>

            {/* dermatologické služby */}
            <div className="dermatologickeSluzby">
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
                </div>
            </div>

            {/* estetické služby */}
            <div className="estetickeSluzby">
                <div className="container">
                    <h2>Estetická dermatologie</h2>
                </div>
            </div>

            {/* ceník */}
            <div className="cenik">
                <div className="container">
                    <h2>Ceník</h2>
                </div>
            </div>


        </div>
    )
}