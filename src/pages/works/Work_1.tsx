
import { motion } from "motion/react";
import type WorkItem from "./WorkItem";
import Video from "../../components/Video";

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
                        *This project was developed as my Undergraduate Thesis.
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
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 0.95,
                            delay: 1.9,
                            ease: "easeOut"
                        }}
                    >
                        <video style={{ width: "60vw" }} autoPlay loop src="/videos/work_1.mp4"></video>
                    </motion.div>
                </section>

                <section style={{ marginTop: 30, fontSize: 20, marginRight: "8vw" }}>

                    <p>Handlink is the undergraduate thesis project I developed at iSTTS. It is a desktop application that connects to a commercial home-grade EEG headset, processes its live data stream, and translates those signals into real-time control of a virtual arm.</p>
                    <p>Making the app, I learned alot about: </p>
                    <ul>
                        <li>Data Collecting and Cleaning</li>
                        <li>Machine Learning, Optimizing Different Models</li>
                        <li>Implementation of ML Models</li>
                    </ul>

                    <p style={{ textAlign: "justify" }}>Building Handlink required end-to-end work across the machine learning pipeline: collecting and cleaning EEG data, experimenting with and optimizing multiple model architectures, and integrating the final inference workflow into a production-ready application.

                        The application itself is built with <a href='https://v2.tauri.app/' >Tauri</a>, combining TypeScript for the frontend and Rust for the backend. The machine learning components leverage TensorFlow for model development and Librosa for signal processing. Handlink interfaces with the Muse 2 headset, a consumer EEG device featuring four dry electrodes and a 256 Hz sampling rate.</p>

                    <img style={{ margin: "auto", display: "flex", width: "35vw" }} src="/images/work1_11.png" alt="" />
                    <span><p style={{ marginTop: "-0.25vh", textAlign: "center" }}>Muse 2 Headband</p></span>

                    <p style={{ textAlign: "justify" }}>With that, below is a narrated demonstration of my finished Undergraduate Thesis's app. A full fledged application with a bluetooth interface, full machine learning pipeline from data collection, preprocessing, feature extraction upto prediction.</p>


                    <Video video={"https://www.youtube.com/embed/6DSWmRx6GRc?si=gpr4ji0nRdEEns3z"} />


                </section>

                {/* 3x3 Image grid */}
                <section style={{ marginTop: 30, fontSize: 20, marginRight: "8vw" }}>
                    <h1 style={{ margin: 0, fontSize: 36 }}>Data Collection</h1>

                    <p style={{ textAlign: "justify" }}> Alot of emphasis was put on the backbone of the application, AKA the data stream. It's imperative to have the bluetooth packets received properly to have as accurate data as possible. A robust recording and streaming system was created to minimize packet loss, underordered/misaligned packets. This is done by having two separate asynchronous data streams within the app itself to handle receiving information, this also has the benefit of stopping/continuing data streams incase the signal was interrupted or by the user itself, whilst still perserving data integrity and not crashing the application.</p>

                    <img style={{ margin: "auto", display: "flex", width: "35vw" }} src="/images/work1_1.png" alt="" />
                    <span><p style={{ marginTop: "-0.25vh", textAlign: "center" }}>Diagram of the two Asynchronous Processes</p></span>

                    <p style={{ textAlign: "justify" }}>After the data stream/recording is established, the data collecting step will begin. 10 participants (2 not pictured) of male and female around the age of 21-23 were asked with their consent to be scanned. They are to imagine 5 motoric imagery movements including: left hand, right hand, left leg, right leg, tongue movements. All MI are recorded in 30 second clips, one after another with a short break in between. After all five, the participants are asked to repeat the same trial 10 times, resulting in a total recording time of 25 minutes for each subject. Multiplied by 10 subjects that include 4 hours and 10 minutes of EEG Data.</p>

                    <img style={{ margin: "auto", display: "flex", width: "35vw" }} src="/images/work1_3.png" alt="" />
                    <span><p style={{ marginTop: "-0.25vh", textAlign: "center" }}>EEG Recording Participants</p></span>

                    <p style={{ textAlign: "justify" }}>The Motor Imagery experiment is a common experiment used throughout many similar ventures, but this one specifically take inspiration from "<i>Reducing Response Time in Motor Imagery Using a Headband and Deep Learning </i>" published by MDPI. In which participants are asked to imagine left and right hand movements. In my own experiment, I'd like to see the possibility of extending beyond 2 MI Movement</p>

                    <img style={{ margin: "auto", display: "flex", width: "35vw" }} src="/images/work1_4.png" alt="" />
                    <span><p style={{ marginTop: "-0.25vh", textAlign: "center" }}>Reducing Response Time in Motor Imagery Using a Headband and Deep Learning</p></span>


                </section>

                <section style={{ marginTop: 30, fontSize: 20, marginRight: "8vw" }}>
                    <h1 style={{ margin: 0, fontSize: 36 }}>Data Processing</h1>

                    <p style={{ textAlign: "justify" }}> After the data were collected, the following steps are followed; "<i>Motor Imagery Classification using a novel CNN in EEG-BCI with common average reference and sliding window techniques</i>" for the overall pipeline methods that is implemented in the app. The signals are cleaned, transformed, thenn turned into the spectrogram with frequency mapping.</p>

                    <img style={{ margin: "auto", display: "flex", width: "35vw" }} src="/images/work1_2.png" alt="" />
                    <span><p style={{ marginTop: "-0.25vh", textAlign: "center" }}>Motor Imagery Classification using a novel CNN in EEG-BCI with common average reference and sliding window techniques</p></span>

                    <p style={{ textAlign: "justify" }}>The signals are transformed through various methods, the initial recorded signals have wild fluctuations and varying scale sizes. This is expected with raw EEG recording, especially home commercial devices where they are more prone to noise and disturbances. The common averaging referencing subtracts the entirety of the signal with the common average resulting in a more uniform scaled signal. After which a bandpass filter is applied in the 2-60 Hz range (The brain signal frequency range most relevant toward deep thought and concious thinking) resulting in a signal thats consistent without wild disturbances. The adjusted signal is now stable, containing relevant microfluctuations that represent the user's thought patterns that will be analyzed in spectrogram form.</p>

                    <img style={{ margin: "auto", display: "flex", width: "35vw" }} src="/images/work1_5.png" alt="" />
                    <span><p style={{ marginTop: "-0.25vh", textAlign: "center" }}>Preprocessing Steps</p></span>

                    <p style={{ textAlign: "justify" }}>After the signals are processed, the final step in feature extraction is to transform the signal into a 2D format, in this case a Spectrogram via the Librosa signal processing library. The four images below represent the four electrodes on the Muse 2 EEG headset, with visible latent space (light blobs) within the bottom of the spectrogram representing thought patterns within the lower frequency ranges. These relevnat frequency ranges are then cropped then stacked together into a single 2D tensor image (right image) where it is ready to be inputted into the model.</p>

                    <img style={{ margin: "auto", display: "flex", width: "35vw" }} src="/images/work1_12.png" alt="" />
                    <span><p style={{ marginTop: "-0.25vh", textAlign: "center" }}>Spectrogram Representation</p></span>

                    <p style={{ textAlign: "justify" }}>The model is trained with a model identical to the research paper, however throughout there are modifications made to attempt a better result which includes removing/adding some extra convolutional layers, tweaking the batch normalization, and readjusting the LSTM layer. Overall the data is trained across multiple scenarios but follows the following trend where: classification of two MI classes show a distinct separation between classes, however a classification of five shows favoritism towards two motor imageries classes whilst disregarding the others whilst severely overfitting. This was proven further in a real test scenario of a test subject where the realtime classification biases towards two MI movements.</p>

                    <img style={{ margin: "auto", display: "flex", width: "35vw" }} src="/images/work1_7.png" alt="" />
                    <span><p style={{ marginTop: "-0.25vh", textAlign: "center" }}>Training Accuracy Loss Graph and Confusion Matrix</p></span>


                </section>

                <section style={{ marginTop: 30, fontSize: 20, marginRight: "8vw" }}>
                    <h1 style={{ margin: 0, fontSize: 36 }}>Live Classification</h1>

                    <p style={{ textAlign: "justify" }}> The research paper "<i>Validating Deep Neural Network for Online Decoding of Motor Imagery Movement from EEG Signals</i>" lies as the foundation on how the signals are windowed, segmented, and how the classifications are interpreted as movement directions within increments. </p>

                    <img style={{ margin: "auto", display: "flex", width: "35vw" }} src="/images/work1_10.png" alt="" />
                    <span><p style={{ marginTop: "-0.25vh", textAlign: "center" }}>Validating Deep Neural Network for Online Decoding of Motor Imagery Movement from EEG Signals</p></span>

                    <p style={{ textAlign: "justify" }}> The pictured diagram describes the implemented pipeline. Live signals are received and displayed on the app image (as you can see on the fluctuating line diagram), and five seconds of recorded signal is then taken as a "buffer", where it is stored and ran through the previously mention preprocessing steps. However, a two second clip is taken spread throughout the five second clip as the individual spectrograms, an odd number (five) of spectrograms are then taken to be pooled together and the result of their predictions are averaged out. This pooling method is implemented to prevent a wild flickering mis-prediction which is common in live EEG experiments. With this, a smoother prediction is possible over long period of live classification.</p>


                    <img style={{ margin: "auto", display: "flex", width: "35vw" }} src="/images/work1_6.png" alt="" />
                    <span><p style={{ marginTop: "-0.25vh", textAlign: "center" }}>Live Classification Pipeline</p></span>



                </section>

                {/* Muse 2 specificaitons
                https://ifelldh.tec.mx/sites/g/files/vgjovo1101/files/Muse%202%20Specifications.pdf


                Reducing Response Time in Motor Imagery Using a Headband and Deep Learning (MDPI) for the main idea of the experiment involving MI, which initially only covers 2 left right movements where in this experiment we are attempting 5 motor imagery movements.
                https://pmc.ncbi.nlm.nih.gov/articles/PMC7728142/


                Motor Imagery Classification using a novel CNN in EEG-BCI with common average reference and sliding window techniques for the overall pipeline methods that is implemented in the app, into the spectrogram and frequency mapping, up intil the prediction.
                https://www.sciencedirect.com/science/article/pii/S1110016825001681#b48 (Elsevier)


                Validating Deep Neural Network for Online Decoding of Motor Imagery Movement from EEG Signals (MDPI) for inspiration on Spectrogram CNN modeling pipeline to thresholding method on live robotic arm movements prediction in increments and itss confidence
                https://www.mdpi.com/1424-8220/19/1/210 */}

                <div style={{ marginBottom: "10vh" }}> </div>

            </main>
        </motion.div>
    )
}