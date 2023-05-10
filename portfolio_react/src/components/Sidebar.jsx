import Avatar from '../img/img-perfil.jpg';

import "../styles/components/sidebar.css";

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <p>imagem</p>
            <p className="title">Desenvolvedor</p>
            <p>Redes Sociais</p>
            <p>Informaçôes para contato</p>
            <a href="#" className="btn">
                Download Currículo
            </a>
        </aside>
    )
}

export default Sidebar