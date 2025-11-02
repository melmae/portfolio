interface ProjectTileProps {
    name: string;
    image: string;
    onClick?: () => void;
}

export function ProjectTile({name, image, onClick}: ProjectTileProps) {
    return (
        <div
            style={{
                height: '200px',
                width: '32%',
                borderRadius: '10px',
                border: '2px solid black',
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
            <img src={image} alt={name} style={{ width: '100%', borderRadius: '5px', border: '1px solid var(--foreground)' }} />
        </div>
    )
}