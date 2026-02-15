import {ReactNode} from "react";

export default function TechTag({children}: { children: ReactNode }) {
    return (
        <span
            style={{
                backgroundColor: 'rgba(14, 90, 107, 0.1)',
                color: 'var(--teal)',
                border: '1px solid rgba(14, 90, 107, 0.25)',
                padding: '5px 10px',
                borderRadius: '15px',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
            }}
        >
            {children}
        </span>
    )
}