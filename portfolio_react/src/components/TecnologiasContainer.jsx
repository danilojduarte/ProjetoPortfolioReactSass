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
        <section className='tecnologias-container'>
            <div className="tecnologias-grid">
                {tecnoligias.map((tech) => (
                    <div className="tecnologias-card" id={tech.id} key={tech.id}>
                        {tech.icon}
                        <div className="tecnoligias-info">
                            <h3>{tech.name}</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur repellat.
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TecnologiasContainer;