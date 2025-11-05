import styles from './page.module.css';
import {Github, Linkedin, Mail} from "lucide-react";

export default function ConnectPage() {
    return (
        <div className={styles.page}>
            <h2>Thanks for connecting with me at GHC 2025!</h2>
            <hr />
            <h3 style={{color: 'var(--accent)'}}>Melissa Schmidt - Software Engineer</h3>
            <p>This site is what I currently call my portfolio, so go ahead and take a look around.</p>
            <p>Want to find me on other platforms? No problem!</p>
            <ul>
                <li>
                    <a href={"https://www.linkedin.com/in/mschmidt00/"} target={"_blank"}>
                        <Linkedin />
                        linkedin.com/in/mschmidt00
                    </a>
                </li>
                <li>
                    <a href={"https://github.com/melmae"} target={"_blank"}>
                        <Github />
                        github.com/melmae
                    </a>
                </li>
            </ul>
            <p>Just want my email? Here you go!</p>
            <a href={"mailto:mmschmidt00@gmail.com"}>
                <Mail />
                mmschmidt00@gmail.com
            </a>
            <p>Interested in my resume? Download it here!</p>
            <a href={"./Melissa-Schmidt-Software-Engineer.pdf"} download style={{textDecoration: "none"}}>
                <button>Download</button>
            </a>
        </div>
    )
}