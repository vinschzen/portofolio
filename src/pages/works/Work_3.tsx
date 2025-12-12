
import { motion } from "motion/react";
import type WorkItem from "./WorkItem";
import Video from "../../components/Video";
import InstagramVideo from "../../components/Instagram";

const workItem: WorkItem = {
  id: "project3",
  title: "Todocchi",
  subtitle: "Mobile Application for a Market Place of Sustainable Energy Solutions with AI Chatbot Integration",
  images: Array(6).fill(""),
  description: "Description for Project One goes here. Lorem ipsum dolor sit amet.",
  year: "2024"
}


export default function Work_3() {
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
          <span style={{ background: "white", borderRadius: "35px", color: "#535457ff", padding: 8, fontSize: 14, marginRight: 10 }}>Augmented Reality</span>
          <span style={{ background: "white", borderRadius: "35px", color: "#535457ff", padding: 8, fontSize: 14 }}>Mobile Development</span>
          <p style={{ marginTop: 40, color: "#9ca3af", fontStyle: "italic", fontSize: 14 }}>
            *This project was developed as part of a team effort during my time at Apple Academy.
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

        <section style={{ marginTop: 16, width: "80%" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 12,
            }}
          >
            {workItem.images.map((src, i) => (
              <div key={i} style={{ borderRadius: 12, overflow: "hidden", minHeight: 120 }}>
                <img
                  src={`/images/work3_` + (i + 1) + `.png`}
                  alt={`${workItem.title} ${i + 1}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginTop: 30, fontSize: 20, marginRight: "8vw" }}>

          <p style={{textAlign: "justify"}}>
            Todocchi is task keeping app that encourages friendly competition and socializing among users to complete their tasks.
             The app leverages augmented reality (AR) technology to create an engaging and interactive user experience. 
             It is developed within the full Apple ecosystem using Swift and SwiftUI, ensuring seamless integration with iOS devices.
          </p>

          <p>Making the app, I learned alot about: </p>
          <ul>
            <li>Augmented Reality</li>
            <li>Planning and Collaboration</li>
            <li>Presenting Projects</li>
          </ul>

          <section style={{ display: "flex", margin: "auto", gap: "20px",  }}>
            <video style={{ width: "25vw" }} autoPlay loop muted src="/videos/work_2_1.mp4"></video>
            <video style={{ width: "25vw" }} autoPlay loop muted src="/videos/work_2_2.mp4"></video>
          </section>

          <p style={{ textAlign: "justify" }}>
           
          </p>

          <img style={{ margin: "auto", display: "flex", width: "40vw" }} src="/images/work3_8.png" alt="" />
          <span><p style={{ marginTop: "-0.25vh", textAlign: "center" }}>App Promo</p></span>



        </section>


        <div style={{marginBottom: "10vh"}}> </div>


      </main>
    </motion.div>
  )
}