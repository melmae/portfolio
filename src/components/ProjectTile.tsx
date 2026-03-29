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
            className={styles.card}
            style={{
                height: '200px',
                width: '200px',
                // borderRadius: '10px',
                // border: '2px solid black',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                padding: '10px',
            }}
            onClick={onClick}
        >
            <h3>{name}</h3>
            <p className={`${styles.tag} ${styles[typeVals[type].color]}`}>{typeVals[type].text}</p>
            {/*<img src={image} alt={name} style={{ width: '100%', borderRadius: '5px', border: '1px solid var(--foreground)' }} />*/}
        </div>
    )
}