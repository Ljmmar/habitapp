import Header from "../helpers/Header"
import { galeria } from "../config/database"

const Primera = () => {
    return (
        <body>
            <Header />
            <div className="information">
                <div className="imagen">
                    <img src='./public/casa4.png' alt="casa" />
                </div >
                <div className="details">
                    <p>Se alquila casa con:<br />
                        4 habitaciones<br />
                        2 baños<br />
                        Terreno aproximando de 200m<br />
                        Ubicado en Sabaneta, Cra 1234'<br />
                        Cerca a la estacion de metro y<br />
                        al centro comercial xxxxx</p>
                </div >
            </div >
            

        </body>
    )
}
export default Primera
