import styles from './ProjectTile.module.css';

interface ProjectTileProps {
    name: string;
    // image: string;
    onClick?: () => void;
    importance: "major" | "minor";
    type: "work" | "personal" | "learning";
}

export function ProjectTile({name, onClick, importance, type}: ProjectTileProps) {
    const typeVals = {
        work: {text: "Work Project", color: "teal"},
        personal: {text: "Side Project", color: "orange"},
        learning: {text: "Experiment", color: "purple"},
    }

    return (
        <div
            className={`${styles.card} ${styles[importance] ?? styles.minor} ${styles[typeVals[type].color]}`}
            onClick={onClick}
        >
            <h3 className={styles.name}>{name}</h3>
            <p className={`${styles.tag} ${styles[typeVals[type].color]}`}>{typeVals[type].text}</p>
        </div>
    )
}
