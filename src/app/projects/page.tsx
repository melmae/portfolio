"use client";

import projects from "./projects.json";
import {ProjectModal} from "@/components/ProjectModal";
import {useMemo, useState} from "react";
import {ProjectTile} from "@/components/ProjectTile";
import styles from "./page.module.css";

const techList = [...new Set(projects.projects.flatMap(p => p.tech))];

export default function Projects() {
    const [projectPreview, setProjectPreview] = useState({open: false, url: ""});
    const [filter, setFilter] = useState({search: "", tech: techList, type: ""});

    function openPreview(url: string) {
        setProjectPreview({open: true, url: url});
    }

    function closePreview() {
        setProjectPreview({open: false, url: ""});
    }

    function updateTechFilter(e: { target: { checked: any; value: string; }; }) {
        if (e.target.checked) {
            setFilter(prev => {return {...prev, tech: [...prev.tech, e.target.value]}})
        } else {
            setFilter(prev => {return {...prev, tech: prev.tech.filter(t => t !== e.target.value)}})
        }
    }

    function filterProjects() {
        return projects.projects
            .filter(p => p.name.toLowerCase().includes(filter.search.toLowerCase()))
            .filter(p => p.tech.every(t => filter.tech.includes(t)))
            .filter(p => filter.type ? p.type === filter.type : true)
            .sort((a, b) => a.name.localeCompare(b.name));
    }

    const filteredProjects = useMemo(() => filterProjects(), [filter])

    return (
        <div className={styles.page}>
            <div className={styles.filters}>
                <h3>Filter:</h3>

                <input type={"text"} placeholder={"Name"} onChange={(e) => setFilter(prev => { return {...prev, search: e.target.value} })} />
                <select value={filter.type} onChange={(e) => setFilter(prev => { return {...prev, type:e.target.value} })}>
                    <option value="" style={{color: 'grey'}}>Choose a type</option>
                    <option value="work">Work Project</option>
                    <option value="personal">Side Project</option>
                    <option value="learning">Experiment</option>
                </select>
                {/*<p>Built with:</p>*/}
                {/*{techList.map(tech => (*/}
                {/*    <label key={tech}>*/}
                {/*        <input type={"checkbox"} value={tech} checked={filter.tech.includes(tech)} onChange={updateTechFilter} />*/}
                {/*        {tech}*/}
                {/*    </label>*/}
                {/*))}*/}
            </div>
            <div className={styles.grid}>
                {filteredProjects.map(project => (
                    <ProjectTile
                        key={project.name}
                        name={project.name}
                        importance={project.importance as any}
                        type={project.type as any}
                        onClick={() => project.url && openPreview(project.url)}
                    />
                ))}
            </div>
            <ProjectModal open={projectPreview.open} url={projectPreview.url} onClose={closePreview} />
        </div>
    );
}