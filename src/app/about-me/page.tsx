import styles from './page.module.css';

export default function AboutMe() {
    return (
        <div className={styles.about}>
            <div className={styles.left}>
                <img src={"profile-pic.jpg"} alt={"Profile picture"} />
                <a href={"https://www.linkedin.com/in/mschmidt00/"} target={"_blank"}>linkedin.com/in/mschmidt00</a>
                <a href={"https://github.com/melmae"} target={"_blank"}>github.com/melmae</a>
            </div>
            <div>
                <p>
                    {`I've been working as a Software Engineer since 2022, but it was a while before that when I started playing around with HTML and CSS.
                    Now, most of my experience is with React and C# (.NET), but in the past I also used Java, React Native, and C.`}
                </p>
                <p>
                    {`Though I can write the occasional SQL script or create an API, my love of coding lies primarily in the frontend. I enjoy trying out different
                    frameworks, libraries, and other tools as I find new and cool ways to create interfaces. Plus, I just love to learn.`}
                </p>
                <p>
                    {`In the same realm, I'm passionate about UX (User Experience) and I'm always trying to learn more about web development 
                    in order to create intuitive and usable pieces of software. I truly believe that UX is what can make software stand out and shine
                    when so many options currently exist.`}
                </p>
                <hr/>
                <p>
                    {`When I'm not writing code, I can be found reading, hanging out with my cat, or watching baseball (Go Brewers!).`}
                </p>
                <p>
                    {`Want to talk tech? Feel free to get in touch!`}
                </p>
            </div>

        </div>
    )
}