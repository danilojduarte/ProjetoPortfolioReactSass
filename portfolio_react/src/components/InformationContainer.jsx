import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";


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
                <di v>
                    <h3>E-mail</h3>
                    <p>danilojoseduarte@gmail.com</p>
                </di>
            </div>
            <div className="info-card">
                <AiFillEnvironment id="pin-icon" />
                <div>
                    <h3>Localização</h3>
                    <p>Natal-RN</p>
                </div>
            </div>
        </section>
    )
};

export default InformationContainer;