
import { motion } from "motion/react";
import type WorkItem from "./WorkItem";

const workItem: WorkItem = {
    id: "project1",
    title: "Handlink",
    subtitle: "BCI Controlled Virtual Arm with Home EEG Device",
    images: Array(9).fill("https://via.placeholder.com/300"),
    description: "Description for Project One goes here. Lorem ipsum dolor sit amet.",
    year: "2025"
}


export default function Work_1() {
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
                    <span style={{ background: "white", borderRadius: "35px", color: "#535457ff", padding: 8, fontSize: 14 }}>Data Science</span>
                    <p style={{ marginTop: 40, color: "#9ca3af", fontStyle: "italic", fontSize: 14 }}>
                        *This project was developed as part of a team effort during my tenure at XYZ University.
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
                <section style={{ marginTop: 30 }}>
                    <video style={{ width: "60vw" }} autoPlay loop src="portofolio/videos/work_1.mp4"></video>
                </section>

                <section style={{ marginTop: 30, fontSize: 20, marginRight: "8vw" }}>

                    <p>Handlink is my Undergraduate Thesis at my time at iSTTS</p>

                    <p>It's an application that connects to a commercial home EEG headset, of which the app will read the information stream to display and use the live information to move a virtual arm.</p>

                    <p>Making the app, I learned alot about: </p>
                    <ul>
                        <li>Data Collecting and Cleaning</li>
                        <li>Machine Learning, Optimizing Different Models</li>
                        <li>Implementation of ML Models</li>
                    </ul>

                    <p>Handlink is a desktop application built on <a href='https://v2.tauri.app/' >Tauri</a>, a framework using TypeScript and Rust</p>

                    <p>The Machine Learning segments were done using Tensorflow as a framework, with Librosa as the main signal processing library.</p>


                </section>

                {/* 3x3 Image grid */}
                <section style={{ marginTop: 30, fontSize: 20, marginRight: "8vw" }}>
                    <h1 style={{ margin: 0, fontSize: 36 }}>Data Collection</h1>

                    <p style={{ textAlign: "justify" }}> Alot of emphasis was put on the backbone of the application, AKA the data stream. It's imperative to have the bluetooth packets received properly to have as accurate data as possible. A robust recording and streaming system was created to minimize packet loss, underordered/misaligned packets. This is done by having two separate asynchronous data streams within the app itself to handle receiving information, this also has the benefit of stopping/continuing data streams incase the signal was interrupted or by the user itself, whilst still perserving data integrity and not crashing the application.</p>

                    <img style={{ margin: "auto", display: "flex", width: "35vw" }} src="portofolio/images/work1_1.png" alt="" />
                    <span><p style={{ marginTop: "-0.25vh", textAlign: "center" }}>Diagram of the two Asynchronous Processes</p></span>

                    <p style={{ textAlign: "justify" }}>After the data stream/recording is established, the data collecting step will begin. 10 participants (2 not pictured) of male and female around the age of 21-23 were asked with their consent to be scanned. They are to imagine 5 motoric imagery movements including: left hand, right hand, left leg, right leg, tongue movements. All MI are recorded in 30 second clips, one after another with a short break in between. After all five, the participants are asked to repeat the same trial 10 times, resulting in a total recording time of 25 minutes for each subject. Multiplied by 10 subjects that include 4 hours and 10 minutes of EEG Data.</p>

                    <img style={{ margin: "auto", display: "flex", width: "35vw" }} src="portofolio/images/work1_3.png" alt="" />
                    <span><p style={{ marginTop: "-0.25vh", textAlign: "center" }}>EEG Recording Participants</p></span>

                    <p style={{ textAlign: "justify" }}>The Motor Imagery experiment is a common experiment used throughout many similar ventures, but this one specifically take inspiration from "<i>Reducing Response Time in Motor Imagery Using a Headband and Deep Learning </i>" published by MDPI. In which participants are asked to imagine left and right hand movements. In my own experiment, I'd like to see the possibility of extending beyond 2 MI Movement</p>

                    <img style={{ margin: "auto", display: "flex", width: "35vw" }} src="portofolio/images/work1_4.png" alt="" />
                    <span><p style={{ marginTop: "-0.25vh", textAlign: "center" }}>Research Paper Experiment</p></span>


                </section>

                {/* Description */}
                <section style={{ marginTop: 30, fontSize: 20, marginRight: "8vw" }}>
                    <h1 style={{ margin: 0, fontSize: 36 }}>Data Processing</h1>

                    <p style={{ textAlign: "justify" }}> Alot of emphasis was put on the backbone of the application, AKA the data stream. It's imperative to have the bluetooth packets received properly to have as accurate data as possible. A robust recording and streaming system was created to minimize packet loss, underordered/misaligned packets. This is done by having two separate asynchronous data streams within the app itself to handle receiving information, this also has the benefit of stopping/continuing data streams incase the signal was interrupted or by the user itself, whilst still perserving data integrity and not crashing the application.</p>

                    <img style={{ margin: "auto", display: "flex", width: "35vw" }} src="portofolio/images/work1_2.png" alt="" />
                    <span><p style={{ marginTop: "-0.25vh", textAlign: "center" }}>Diagram of the two Asynchronous Processes</p></span>
                    
                    <p style={{ textAlign: "justify" }}>After the data stream/recording is established, the data collecting step will begin. 10 participants (2 not pictured) of male and female around the age of 21-23 were asked with their consent to be scanned. They are to imagine 5 motoric imagery movements including: left hand, right hand, left leg, right leg, tongue movements. All MI are recorded in 30 second clips, one after another with a short break in between. After all five, the participants are asked to repeat the same trial 10 times, resulting in a total recording time of 25 minutes for each subject. Multiplied by 10 subjects that include 4 hours and 10 minutes of EEG Data.</p>
                </section>

                <section style={{ marginTop: 18 }}>
                    <h1 style={{ margin: 0, fontSize: 36 }}>Model</h1>

                    <div
                        style={{
                            background: "rgba(255,255,255,0.02)",
                            // padding: 16,
                            borderRadius: 12,
                            color: "#e5e7eb",
                            lineHeight: 1.6,
                        }}
                    >
                        {workItem.description}
                    </div>
                </section>

                <section style={{ marginTop: 30, fontSize: 20, marginRight: "8vw" }}>
                    <h1 style={{ margin: 0, fontSize: 36 }}>Video</h1>

                    <p style={{ textAlign: "justify" }}> Alot of emphasis was put on the backbone of the application, AKA the data stream. It's imperative to have the bluetooth packets received properly to have as accurate data as possible. A robust recording and streaming system was created to minimize packet loss, underordered/misaligned packets. This is done by having two separate asynchronous data streams within the app itself to handle receiving information, this also has the benefit of stopping/continuing data streams incase the signal was interrupted or by the user itself, whilst still perserving data integrity and not crashing the application.</p>

                    <iframe width="420" height="315"
                        src="https://www.youtube.com/watch?v=6DSWmRx6GRc&feature=youtu.be">
                    </iframe>
                    <span><p style={{ marginTop: "-0.25vh", textAlign: "center" }}>Diagram of the two Asynchronous Processes</p></span>

                </section>
            </main>
        </motion.div>
    )
}