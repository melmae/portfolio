interface ProjectShowcaseProps {
    image: {src: string; alt: string};
    title: string;
    teaser: string;
    position: "primary" | "secondary";
}

export default function ProjectShowcase({image, title, teaser, position}: ProjectShowcaseProps) {
    return (
        <div style={{width: position === "primary" ? 600 : 400, display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', justifyContent: 'center'}}>
            <img width={position === "primary" ? 600 : 400} src={image.src} alt={image.alt} />
            <div>
                <h1>{title}</h1>
                <p style={{color: 'var(--secondaryText)', paddingBlock: '10px'}}>{teaser}</p>
            </div>
        </div>
    )
}