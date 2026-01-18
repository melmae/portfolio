import styles from "./page.module.css";
import ProjectShowcase from "@/components/ProjectShowcase";

export default function Home() {
  return (
    <div className={styles.page}>
        <div style={{height: 'calc(100vh - 48px)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <h2>Hi, my name is Melissa and this is my <span style={{textDecoration: 'line-through'}}>playground</span> portfolio!</h2>
        </div>
        <ProjectShowcase
            position={"primary"}
            image={{src: '../portfolio/Wordle-screenshot-limited.png', alt: 'Wordle'}}
            title={"Wordle"}
            teaser={"Recreated my own Wordle in Svelte, paying attention to small details that shape the user experience."}
        />
        <div style={{display: 'flex', flexDirection: 'row', gap: '40px'}}>
            <ProjectShowcase
                position={"secondary"}
                image={{src: '../portfolio/AniDash-screenshot-limited.png', alt: 'Wordle'}}
                title={"AniDash"}
                teaser={"Visualizing anime and manga habits my way, with custom stats and a sleek interface."}
            />
            <ProjectShowcase
                position={"secondary"}
                image={{src: '../portfolio/ShutTheBox-screenshot-limited.png', alt: 'Wordle'}}
                title={"Shut the Box"}
                teaser={"My first-ever project, remade in vanilla JavaScript; revisiting the code that made me fall in love with programming."}
            />
        </div>
        <div style={{height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'column', gap: '10px', color: 'var(--secondaryText)'}}>
            <h4>Designed and built with care.</h4>
            <h4>© {new Date().getFullYear()} Melissa Schmidt</h4>
        </div>
    </div>
  );
}
