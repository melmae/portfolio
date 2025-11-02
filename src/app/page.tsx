import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h2>Hi, my name is Melissa and this is my <span style={{textDecoration: 'line-through'}}>playground</span> portfolio!</h2>
    </div>
  );
}
