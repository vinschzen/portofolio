import { Canvas } from '@react-three/fiber'
import { Physics, RigidBody } from '@react-three/rapier'
import { useTexture } from '@react-three/drei'
import React from 'react'
import { styles } from '../styles/layout'
import { motion } from 'motion/react'

const IconEmail: React.FC<React.SVGProps<SVGSVGElement>> = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" {...p}>
    <path
      d="M3 6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v11A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5v-11z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.5 6.75l7 5.25 7-5.25"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconGithub: React.FC<React.SVGProps<SVGSVGElement>> = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" {...p}>
    <path
      d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.25.8-.55v-2.12c-3.34.72-4.04-1.6-4.04-1.6-.54-1.36-1.32-1.72-1.32-1.72-1.08-.74.08-.72.08-.72 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.3 3.46.98.1-.76.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.47 5.92.43.38.82 1.14.82 2.3v3.42c0 .3.18.66.8.55A12 12 0 0 0 12 .5z"
      fill="currentColor"
    />
  </svg>
);

const IconLinkedIn: React.FC<React.SVGProps<SVGSVGElement>> = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" {...p}>
    <path
      d="M4.98 3.5a2.5 2.5 0 1 0 .02 0zM3.5 8.5h3v11h-3v-11zm6.5 0h2.86v1.5h.04c.4-.76 1.37-1.56 2.82-1.56 3.02 0 3.58 1.99 3.58 4.58v6.48h-3v-5.74c0-1.37-.02-3.13-1.9-3.13-1.9 0-2.2 1.5-2.2 3.03v5.84h-3v-11z"
      fill="currentColor"
    />
  </svg>
);

const IconPhone: React.FC<React.SVGProps<SVGSVGElement>> = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" {...p}>
    <path
      d="M21 16.5a2 2 0 0 1-2.2 1.97c-2.1-.35-4.14-1.56-5.9-3.33s-2.98-3.8-3.33-5.9A2 2 0 0 1 12 6.99h.01A2 2 0 0 1 14 6c.14 0 .29.01.44.04a2 2 0 0 1 1.79 1.43c.2.75.7 1.76 1.88 2.94 1.18 1.18 2.19 1.68 2.94 1.88a2 2 0 0 1 1.43 1.79c.03.15.04.3.04.44z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Contact: React.FC = () => (
  <section style={styles.workContent}>
    <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.35,
                      delay: 0.1,
                      ease: "easeOut"
                    }}
                  >
    <h2 style={styles.title}>Contact Me</h2>

    <p style={styles.description}>
      Feel free to reach out for collaboration, opportunities, or questions.
    </p>

    <div style={styles.list}>
      <div style={styles.item}>
        <span style={{margin: "8px"}}><IconEmail /></span>
        <span style={styles.label}>Email:</span>
        <a
          href="mailto:vinshentwianata@gmail.com"
          style={styles.link}
        >
          vinshentwianata@gmail.com
        </a>
      </div>

      <div style={styles.item}>
        <span style={{margin: "8px"}}><IconGithub /></span>
        <span style={styles.label}>GitHub:</span>
        <a
          href="https://github.com/vinschzen"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          https://github.com/vinschzen
        </a>
      </div>

      <div style={styles.item}>
        <span style={{margin: "8px"}}><IconLinkedIn /></span>
        <span style={styles.label}>LinkedIn:</span>
        <a
          href="https://www.linkedin.com/in/vinshent-l-wianata-a88085260/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          linkedin.com/in/vinshent-l-wianata-a88085260
        </a>
      </div>

      <div style={styles.item}>
        <span style={{margin: "8px"}}><IconPhone/></span>
        <span style={styles.label}>Phone:</span>
        <span style={styles.text}>+62 896-5484-1277</span>
      </div>
    </div>
    </motion.div>
  </section>
)

export default Contact