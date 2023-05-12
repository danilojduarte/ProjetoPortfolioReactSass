import SocialNetWorks from "./SocialNetWorks";
import InformationContainer from "./informationContainer";

import Avatar from '../img/img-perfil.jpg';

import "../styles/components/sidebar.css";





const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Perfil Danilo Duarte" />
            <p className="title">Desenvolvedor</p>
            <SocialNetWorks/>
            <InformationContainer />
            <a href="#" className="btn">
                Download Currículo
            </a>
        </aside>
    )
}


export default Sidebar