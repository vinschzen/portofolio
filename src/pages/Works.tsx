import React, { useState } from "react";
import { styles } from "../styles/layout";
import { motion } from "motion/react"

import Work_1 from "./works/Work_1";
import Work_2 from "./works/Work_2";
import Work_3 from "./works/Work_3";
import Work_4 from "./works/Work_4";

interface WorkItem {
  id: string;
  title: string;
  subtitle: string;
}

const workItems: WorkItem[] = [
  {
    id: "1",
    title: "Handlink",
    subtitle: "Brain-Computer Interface",
  },
  {
    id: "2",
    title: "Lightning in a Bottle",
    subtitle: "AI Chatbot"
  },
  {
    id: "3",
    title: "Todocchi",
    subtitle: "Augmented Reality"
  },
  {
    id: "4",
    title: "Nusantara Raider",
    subtitle: "VR Experience"
  },
  {
    id: "5",
    title: "Mako",
    subtitle: "Dashboard Application"
  }
];


const Works: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(workItems[0].id);
  const selected = workItems.find((w) => w.id === selectedId) || workItems[0];

  console.log("Selected work item:", selectedId);


  return (
    <section style={styles.workContent}>
      <div>
        <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.35,
                      delay: 0.1,
                      ease: "easeOut"
                    }}
                  >
      
        <aside
          style={{
            width: 260,
            minWidth: 200,
            background: "rgba(255,255,255,0.02)",
            borderRight: "1px solid rgba(255,255,255,0.06)",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            alignItems: "stretch",
            position: "absolute",
            height: "60vh",
          }}
        >
          <h3 style={{ margin: 0, marginBottom: 8 }}>Works</h3>
          <p style={{ marginTop: 0, marginBottom: 12, color: "#9ca3af" }}>
            Select a project
          </p>


          <nav style={{ display: "flex", flexDirection: "column", gap: 8, overflowY: "auto" }}>
              {workItems.slice(0, 3 ).map((item, i) => {

                const active = item.id === selectedId;
                return (
                  <motion.div
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.35,
                      delay: i * 0.1,
                      ease: "easeOut"
                    }}
                  >
                    <button
                      key={item.id}
                      onClick={() => setSelectedId(item.id)}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        padding: "12px",
                        borderRadius: 10,
                        width: "100%",
                        background: active ? "rgba(99, 101, 241, 0.53)" : "transparent",
                        border: active ? "1px solid rgba(99, 101, 241, 0.06)" : "1px solid rgba(255,255,255,0.04)",
                        cursor: "pointer",
                        color: active ? "#fff" : "#e5e7eb",
                      }}
                      aria-pressed={active}
                    >
                      <strong style={{ fontSize: 14 }}>{item.title}</strong>
                      <span style={{ fontSize: 12, color: active ? "#c7d2fe" : "#9ca3af" }}>
                        {item.subtitle}
                      </span>
                    </button>
                  </motion.div>

                );
              })}
          </nav>

          <hr></hr>

          <p style={{ marginTop: 0, marginBottom: 12, color: "#9ca3af" }}>
            Old
          </p>
          <nav style={{ display: "flex", flexDirection: "column", gap: 8, overflowY: "auto" }}>
              {workItems.slice(3, 5).map((item, i) => {

                const active = item.id === selectedId;
                return (
                  <motion.div
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.35,
                      delay: i * 0.1,
                      ease: "easeOut"
                    }}
                  >
                    <button
                      key={item.id}
                      onClick={() => setSelectedId(item.id)}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        padding: "12px",
                        borderRadius: 10,
                        width: "100%",
                        background: active ? "rgba(99, 101, 241, 0.53)" : "transparent",
                        border: active ? "1px solid rgba(99, 101, 241, 0.06)" : "1px solid rgba(255,255,255,0.04)",
                        cursor: "pointer",
                        color: active ? "#fff" : "#e5e7eb",
                      }}
                      aria-pressed={active}
                    >
                      <strong style={{ fontSize: 14 }}>{item.title}</strong>
                      <span style={{ fontSize: 12, color: active ? "#c7d2fe" : "#9ca3af" }}>
                        {item.subtitle}
                      </span>
                    </button>
                  </motion.div>

                );
              })}
          </nav>

          <div style={{ marginTop: "auto", fontSize: 12, color: "#9ca3af" }}>
            <div>Tip: use keyboard to navigate (coming soon)</div>
          </div>
        </aside>
        </motion.div>


        {selectedId === `1` && <Work_1 />}
        {selectedId === `2` && <Work_2 />}
        {selectedId === `3` && <Work_3 />}
        {selectedId === `4` && <Work_4 />}

      </div>
    </section>
  );
};

export default Works;