import styles from "./page.module.css";
import ProjectShowcase from "@/components/ProjectShowcase";

export default function Home() {
  return (
    <div className={styles.page}>
        <div className={styles.intro}>
            <h1>I’m Melissa.</h1>
            <h2 style={{fontWeight: '250'}}>A software engineer exploring how <span style={{color: 'var(--purple)', fontStyle: 'italic', letterSpacing: '1px', fontWeight: '500'}}>thoughtful design</span> and <span style={{color: 'var(--teal)', fontWeight: '700'}}>solid engineering</span> meet.</h2>
        </div>
        <ProjectShowcase
            position={"primary"}
            image={{src: '../portfolio/AniDash-screenshot-limited.png', alt: 'Wordle'}}
            title={"AniDash"}
            teaser={"Visualizing anime and manga habits my way, with custom stats and a sleek interface."}
            tags={["React", "TypeScript", "Vite", "Tanstack Router", "Shadcn"]}
            extras={(
                <ul style={{padding: '10px 20px', color: 'var(--secondaryText)', fontSize: '.85rem'}}>
                    <li style={{paddingBlock: '5px'}}>Integrated a third-party GraphQL API and shaped responses for client-side use</li>
                    <li style={{paddingBlock: '5px'}}>Introduced TanStack Query to handle caching and mitigate rate limiting</li>
                    <li style={{paddingBlock: '5px'}}>Recreated AniList’s visual language using Shadcn while maintaining accessibility</li>
                </ul>
            )}
        />
        <div style={{display: 'flex', flexDirection: 'row', gap: '40px'}}>
            <ProjectShowcase
                position={"secondary"}
                image={{src: '../portfolio/Wordle-screenshot-limited.png', alt: 'Wordle'}}
                title={"Wordle"}
                teaser={"Recreated my own Wordle in Svelte, paying attention to small details that shape the user experience."}
                tags={["Svelte", "Vite"]}
            />
            <ProjectShowcase
                position={"secondary"}
                image={{src: '../portfolio/ShutTheBox-screenshot-limited.png', alt: 'Wordle'}}
                title={"Shut the Box"}
                teaser={"My first-ever project, remade in vanilla JavaScript; revisiting the code that made me fall in love with programming."}
                tags={["JavaScript"]}
            />
        </div>
        <div style={{height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'column', gap: '10px', color: 'var(--secondaryText)'}}>
            <h4>Designed and built with care.</h4>
            <h4>© {new Date().getFullYear()} Melissa Schmidt</h4>
        </div>
    </div>
  );
}
