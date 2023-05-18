import { 
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact,
} from 'react-icons/di';

import "../styles/components/tecnologiascontainer.css";

const tecnoligias = [
    { id: "html", name: "HTML5", icon: <DiHtml5/> },
    { id: "css", name: "CSS3", icon: <DiCss3/> },
    { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
    { id: "mysql", name: "MySQL", icon: <DiMysql /> },
    { id: "react", name: "React", icon: <DiReact /> },
];

const TecnologiasContainer = () => {
    return (
        <div>TecnologiasContainer</div>
    );
};

export default TecnologiasContainer;