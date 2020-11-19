import React from 'react';
import { FaGithub } from "react-icons/fa";

const Work = ({ projects }) => {
    return (
        <div className="work_container">
            <h1>portfolio</h1>
            <div className="projects_container">
                {projects.map((project) => (
                    <div key={project.id} className="project">
                        <div className="image">
                            <a href={project.url}>
                                <img src={project.imageSrc} alt={project.title}></img>
                            </a>
                        </div>
                        <div className="title">
                            <FaGithub></FaGithub> <a href={project.githublink}>{project.title}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Work