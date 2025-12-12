
import { motion } from "motion/react";
import type WorkItem from "./WorkItem";
import Video from "../../components/Video";
import InstagramVideo from "../../components/Instagram";

const workItem: WorkItem = {
  id: "project4",
  title: "Nusantara Raider",
  subtitle: "VR Puzzle Game Inspired by Indonesian Culture",
  images: Array(6).fill(""),
  description: "Description for Project One goes here. Lorem ipsum dolor sit amet.",
  year: "2023"
}


export default function Work_4() {
  return (

    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.35,
        delay: 0.3,
        ease: "easeOut"
      }}
    >
      <main style={{ flex: 1, padding: "1.25rem", overflowY: "auto", marginLeft: 380, maxHeight: "80vh" }}>
        <header>
          <h2 style={{ margin: 0, position: "absolute", right: 30 }}>{workItem.year}</h2>
          <h1 style={{ margin: 0, fontSize: 36 }}>{workItem.title}</h1>
          <p style={{ marginTop: 6, color: "#cfd2d8ff" }}>{workItem.subtitle}</p>
          <span style={{ background: "white", borderRadius: "35px", color: "#535457ff", padding: 8, fontSize: 14, marginRight: 10 }}>Virtual Reality</span>
          <p style={{ marginTop: 40, color: "#9ca3af", fontStyle: "italic", fontSize: 14 }}>
            *This project was developed as part of a team effort for Gemastik Gamedev Competition
          </p>
        </header>

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "100%", opacity: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.3,
            ease: "easeOut"
          }}
        >
          <hr style={{ color: "#cfd2d8ff", marginBottom: 5 }} />
        </motion.div>

        {/* Video */}
        <section style={{ marginTop: 16, width: "80%" }}>
          <Video video={"https://www.youtube.com/embed/EKVSVTCBhNI?si=raMTSeoH4HusYtFJ"}></Video>
        </section>

        <section style={{ marginTop: 30, fontSize: 20, marginRight: "8vw" }}>

          <p style={{ textAlign: "justify" }}>
            Nusantara Raider is a VR puzzle game that takes players on an immersive journey through the rich cultural heritage of Indonesia.
            Players explore various Indonesian landmarks and solve puzzles inspired by traditional art, architecture, and folklore.
            The players will interact with the environmnent from solving a combination puzzle, crawling under tight corners, climbing ladders,
            rolling a pulley system, also a Simon Says puzzle.
            The game is developed using Unity and C#, optimized for Oculus Quest 2 to provide an engaging and interactive experience.
          </p>

          <p>Making the game, I learned alot about: </p>
          <ul>
            <li>VR Development</li>
            <li>Video Game Architecture</li>
            <li>Project Preparation and Documenting</li>
          </ul>


          <p style={{ textAlign: "justify" }}>

          </p>

          {/* 
          <img style={{ margin: "auto", display: "flex", width: "40vw" }} src="/images/work3_8.png" alt="" />
          <span><p style={{ marginTop: "-0.25vh", textAlign: "center" }}>App Promo</p></span> */}


          <div style={{ marginBottom: "10vh" }}> </div>

        </section>




      </main>
    </motion.div>
  )
}