import styles from './ProjectShowcase.module.css';
import TechTag from "@/components/TechTag";
import {ReactNode} from "react";

interface ProjectShowcaseProps {
    image: {src: string; alt: string};
    title: string;
    teaser: string;
    extras?: ReactNode;
    position: "primary" | "secondary";
    tags: string[];
}

export default function ProjectShowcase({image, title, teaser, extras, position, tags}: ProjectShowcaseProps) {
    return (
        <div
            className={styles.card}
            style={{
                width: position === "primary" ? 800 : 400,
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                padding: '20px',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <img src={image.src} alt={image.alt} style={{width: '100%'}} />
            <div>
                <h1>{title}</h1>
                <p style={{color: 'var(--secondaryText)', paddingBlock: '10px'}}>{teaser}</p>
                {extras}
            </div>
            <div style={{display: 'flex', flexDirection: 'row', gap: '10px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
                {tags.map((tag, i) => (<TechTag key={i}>{tag}</TechTag>))}
            </div>
        </div>
    )
}