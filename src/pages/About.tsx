import React, { useState } from "react";
import { styles } from "../styles/layout";
import { motion } from "motion/react";


const softskillsList = [
  "Clear communication",
  "Problem solving",
  "Team collaboration",
  "Structured thinking",
];

const languagesList = [
  "Bahasa Indonesia",
  "English",
  "Japanese",
];


const About: React.FC = () => {
  // const [selected, setSelected] = useState<SidebarKey>("softskills");

  return (
    <section style={styles.workContent}>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.35,
          delay: 0.3,
          ease: "easeOut"
        }}
      >

        <main style={styles.container}>
          <section>
            <h3 style={styles.subtitle}>
              Softskills
            </h3>
            <ul style={styles.list}>
              {(softskillsList).map(
                (item, idx) => (
                  <li key={idx} style={styles.listItem}>
                    {item}
                  </li>
                )
              )}
            </ul>
          </section>

          <section>
            <h3 style={styles.subtitle}>
              Languages
            </h3>
            <ul style={styles.list}>
              {(languagesList).map(
                (item, idx) => (
                  <li key={idx} style={styles.listItem}>
                    {item}
                  </li>
                )
              )}
            </ul>
          </section>

          <section>
            <h3 style={styles.subtitle}>My Favourite Books</h3>
            <ul style={styles.list}>
              <li style={styles.listItem}>Kafka on the Shore — Haruki Murakami</li>
              <li style={styles.listItem}>House of Leaves — Mark Z. Danielewski</li>
              <li style={styles.listItem}>Dracula — Bram Stoker</li>
            </ul>

            <h3 style={{ ...styles.subtitle, marginTop: "1.5rem" }}>
              My Favourite Video Games
            </h3>
            <ul style={styles.list}>
              <li style={styles.listItem}>Hollow Knight</li>
              <li style={styles.listItem}>NieR: Automata</li>
              <li style={styles.listItem}>Armored Core</li>
            </ul>
          </section>
        </main>

      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.35,
          delay: 0.7,
          ease: "easeOut"
        }}
      >
      <section style={styles.aboutContainer}>
        <h2 style={styles.title}>About Me</h2>

        <a href="/Resume.pdf" style={styles.button}>
          Download Resume

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style={{ marginLeft: "8px", marginBottom: "-5px", width: "18px" }}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>

        </a>

        <img src="about.png" style={{ maxWidth: "55vw" }} />

        <p style={{ textAlign: "justify", marginTop: "1.5rem", color: "#cfd2d8ff", lineHeight: 1.6, maxWidth: "55vw" }}>
          Hi! I'm Vin, an Information Systems gradute majoring in Data Science.
          I am a nerd at heart who is passionate about technology, programming, and all things data.
          I love building projects that solve real-world problems and exploring new technologies.
          When I'm not coding, you can find me reading sci-fi novels, playing video games, or experimenting with new recipes in the kitchen.
          I'm always eager to learn and take on new challenges, so feel free to reach out if you'd like to connect!
        </p>
      </section>
      </motion.div>

    </section>
  );
}


export default About;