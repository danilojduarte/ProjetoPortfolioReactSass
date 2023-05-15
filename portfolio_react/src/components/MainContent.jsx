import AboutContainer from "./AboutContainer";
import TecnologiasContainer from "./TecnologiasContainer";
import ProjetosContainer from "./ProjetosContainer";

import '../styles/components/maincontent.css';

const MainContent = () => {
    return (
        <main id='main-content'>
            <AboutContainer />
            <TecnologiasContainer />
            <ProjetosContainer />
        </main>
    );
};

export default MainContent