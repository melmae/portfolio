interface ProjectShowcaseProps {
    image: {src: string; alt: string};
    title: string;
    teaser: string;
    position: "primary" | "secondary";
}

export default function ProjectShowcase({image, title, teaser, position}: ProjectShowcaseProps) {
    return (
        <div style={{width: '100%', display: 'flex', flexDirection: position === "primary" ? 'row' : 'column', gap: '40px'}}>
            <img height={300} width={400} src={image.src} alt={image.alt} />
            <div>
                <h1>{title}</h1>
                <p style={{color: 'var(--secondaryText)', paddingBlock: '10px'}}>{teaser}</p>
            </div>
        </div>
    )
}