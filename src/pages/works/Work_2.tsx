
import { motion } from "motion/react";
import type WorkItem from "./WorkItem";
import Video from "../../components/Video";
import InstagramVideo from "../../components/Instagram";

const workItem: WorkItem = {
  id: "project2",
  title: "Lightning in a Bottle",
  subtitle: "Mobile Application for a Market Place of Sustainable Energy Solutions with AI Chatbot Integration",
  images: ["/images/work2_1.png", "/images/work2_2.png", "/images/work2_3.png", "/images/work2_4.png"],
  description: "Description for Project One goes here. Lorem ipsum dolor sit amet.",
  year: "2024"
}


export default function Work_2() {
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
          <span style={{ background: "white", borderRadius: "35px", color: "#535457ff", padding: 8, fontSize: 14, marginRight: 10}}>LLMs</span>
          <span style={{ background: "white", borderRadius: "35px", color: "#535457ff", padding: 8, fontSize: 14 }}>Mobile Development</span>
          <p style={{ marginTop: 40, color: "#9ca3af", fontStyle: "italic", fontSize: 14 }}>
            {/* *This project was developed as part of a team effort during my tenure at XYZ University. */}
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
        <section style={{ marginTop: 30, width: "80%" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "8px",
              width: "100%",
            }}
          >
            {workItem.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`preview-${idx}`}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "6px",
                  objectFit: "cover",
                }}
              />
            ))}
          </div>
        </section>

        <section style={{ marginTop: 30, fontSize: 20, marginRight: "8vw" }}>

          <p>Lightning in a Bottle is a capstone project for my Mobile Development class, is an e-commerce app focusing on local sourced energy featuring an AI chatbot. 
            The app is built from the ground up then published to Google App Store with all appropriate terms and services. </p>

          <p>Making the app, I learned alot about: </p>
          <ul>
            <li>Establishing LLM APIs and Pipelines</li>
            <li>Application Architecture</li>
            <li>Publishing an App to the Play Store</li>
          </ul>

          <img style={{ margin: "auto", display: "flex", width: "40vw" }} src="/images/work2_6.png" alt="" />
          <span><p style={{ marginTop: "-0.25vh", textAlign: "center" }}>App Store Page</p></span>


          <p style={{ textAlign: "justify" }}>
            One of the requirements for the capstone project was to base the app on sustainable development goals. After careful consideration, I decided to focus on Goal 7: Affordable and Clean Energy.
            This goal aims to ensure access to affordable, reliable, sustainable, and modern energy for all.
            By creating a marketplace for sustainable energy solutions, Lightning in a Bottle contributes to this goal by promoting the adoption of renewable energy sources and making them more accessible to a wider audience.
            </p>

          <img style={{ margin: "auto", display: "flex", width: "10vw" }} src="/images/work2_5.png" alt="" />
          <span><p style={{ marginTop: "-0.25vh", textAlign: "center" }}>Google's 7th Sustainable Development Goals</p></span>

          <p style={{ textAlign: "justify" }}>
            The app is inspired by LocalVolts, the Australian exclusive peer-to-peer energy trading platform that enables users to buy and sell excess renewable energy directly with one another.
            Lightning in a Bottle aims to expand on this concept by creating a comprehensive marketplace for sustainable energy solutions, including solar panels, wind turbines, and energy storage systems.
            The app features an AI-powered chatbot that assists users in explaining store contents or finding the best products and services based on their specific needs and preferences.
            </p>

            <InstagramVideo url="https://www.instagram.com/reel/C8y5jzURlUV/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==" />



        </section>




      </main>
    </motion.div>
  )
}