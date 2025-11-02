import {Header} from "@/components/Header";

export default function ProjectsLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <h2>Things I've built:</h2>
            {children}
        </div>
    );
}