import Link from "next/link";

export function Header() {
    return (
        <nav
            style={{
                width: "100%",
                height: "48px",
                background: "var(--black)",
                color: "var(--foreground)",
                display: "flex",
                flexDirection: "row",
                gap: "30px",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "16px",
                textTransform: "uppercase",
            }}
        >
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/about-me">About Me</Link>
        </nav>
    )
}