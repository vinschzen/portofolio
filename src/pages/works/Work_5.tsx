
import { motion } from "motion/react";
import type WorkItem from "./WorkItem";
import Video from "../../components/Video";
import InstagramVideo from "../../components/Instagram";

const workItem: WorkItem = {
  id: "project5",
  title: "Mako",
  subtitle: "Dashboard Application for Monitoring and Managing Home Energy Appliances",
  images: Array(4).fill(""),
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
          <span style={{ background: "white", borderRadius: "35px", color: "#535457ff", padding: 8, fontSize: 14, marginRight: 10 }}>LLM</span>
          <span style={{ background: "white", borderRadius: "35px", color: "#535457ff", padding: 8, fontSize: 14, marginRight: 10 }}>Cloud Computing</span>
          <p style={{ marginTop: 40, color: "#9ca3af", fontStyle: "italic", fontSize: 14 }}>
            *This project was developed as part of a team effort for Cloud Computing Class
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
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 12,
            }}
          >
            {workItem.images.map((src, i) => (
              <div key={i} style={{ borderRadius: 12, overflow: "hidden", minHeight: 120 }}>
                <img
                  src={`/images/work5_` + (i + 1) + `.gif`}
                  alt={`${workItem.title} ${i + 1}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginTop: 30, fontSize: 20, marginRight: "8vw" }}>

          <p style={{ textAlign: "justify" }}>
            Mako is a web app designed to monitor and manage home energy appliances efficiently.
            It features user-input energy consumption tracking, appliance control, and usage analytics.
            A key highlight is the AI Chatbot integration (With Gemini), which assists users in optimizing their energy usage through personalized recommendations.
            The app utilizes modern web technologies such as React for the frontend and Node.js for the backend, ensuring a responsive and user-friendly experience.
            Mako aims to help users reduce energy consumption and promote sustainable living through smart home management.
          </p>

          <p>Making the web app, I learned alot about: </p>
          <ul>
            <li>Google Cloud Architecture</li>
            <li>Geminu API</li>
            <li>Google Cloud Hosting</li>
          </ul>

          <p style={{ textAlign: "justify" }}>
            The web app is developed alongside the Google Cloud Architect program, providing practical experience in cloud computing and AI integration.
            Taught by Google Cloud associates, allowing us to explore various cloud services and best practices with free tokens.
            Completing the Google Cloud Architect certification after the project enhanced my skills in cloud architecture and AI technologies.


          </p>

          <section style={{ marginTop: 30, fontSize: 20, marginRight: "8vw" }}>
            <h1 style={{ margin: 0, fontSize: 36 }}>Presentation</h1>

            <div style={{ display: "flex", margin: "auto" }}>
              <video style={{ width: "50vw", marginTop: 16 }} controls muted autoPlay src="/videos/PresentasiMako.mp4"></video>
            </div>

          </section>

          {/* 
          <img style={{ margin: "auto", display: "flex", width: "40vw" }} src="/images/work3_8.png" alt="" />
          <span><p style={{ marginTop: "-0.25vh", textAlign: "center" }}>App Promo</p></span> */}



        </section>

        <div style={{marginBottom: "10vh"}}> </div>




      </main>
    </motion.div>
  )
}