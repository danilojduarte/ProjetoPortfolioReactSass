import Avatar from '../img/img-perfil.jpg';

import "../styles/components/sidebar.css";
import SocialNetWorks from './SocialNetWorks';


const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Perfil Danilo Duarte" />
            <p className="title">Desenvolvedor</p>
            <SocialNetWorks />
            <p>Informaçôes para contato</p>
            <a href="#" className="btn">
                Download Currículo
            </a>
        </aside>
    )
}


export default Sidebar