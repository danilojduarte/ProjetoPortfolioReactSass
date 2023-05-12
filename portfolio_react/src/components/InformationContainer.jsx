import { AiFillPhone, AiOutlineMail, AiFillEnviroment } from "react-icons/ai";


import '../styles/components/informationcontainer.css';


const InformationContainer = () => {
    return (

        <section id="information">
            <div className="info-card">
                <AiFillPhone id="phone-icon" />
                <div>
                    <h3>Telefone</h3>
                    <p>(84) 98791-5406</p>
                </div>
            </div>
            <div className="info-card">
                <AiOutlineMail id="email-icon" />
                <div>
                    <h3>E-mail</h3>
                    <p>danilojoseduarte@gmail.com</p>
                </div>
            </div>
            <div className="info-card">
                <AiFillEnviroment id="pin-icon" />
                <div>
                    <h3>Localização</h3>
                    <p>Natal-RN</p>
                </div>
            </div>
        </section>
    )
};

export default InformationContainer;