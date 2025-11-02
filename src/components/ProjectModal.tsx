interface ProjectModalProps {
    url: string;
    open: boolean;
    onClose: () => void;
}

export function ProjectModal({url, open, onClose}: ProjectModalProps) {
    return (
        <dialog open={open} style={{height: '90%', width: '90%', top: '5%', left: '5%', position: 'fixed', borderRadius: '10px', border: '2px solid var(--foreground)'}} onClose={onClose}>
            <button style={{position: "absolute", height: "48px", width: '48px'}} onClick={onClose}>x</button>
            <iframe src={url} style={{height: '100%', width: '100%'}} />
        </dialog>
    )
}