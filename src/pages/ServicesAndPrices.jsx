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