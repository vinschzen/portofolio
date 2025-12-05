import React, { useState } from "react";
import { styles } from "../styles/layout";
import { motion } from "motion/react"

interface WorkItem {
  id: string;
  title: string;
  subtitle: string;
  images: string[];
  description: string;
}

const workItems: WorkItem[] = [
  {
    id: "project1",
    title: "Project One",
    subtitle: "Subtitle One",
    images: Array(9).fill("https://via.placeholder.com/300"),
    description: "Description for Project One goes here. Lorem ipsum dolor sit amet."
  },
  {
    id: "project2",
    title: "Project Two",
    subtitle: "Subtitle Two",
    images: Array(9).fill("https://via.placeholder.com/300"),
    description: "Description for Project Two goes here."
  },
  {
    id: "project3",
    title: "Project Three",
    subtitle: "Subtitle Three",
    images: Array(9).fill("https://via.placeholder.com/300"),
    description: "Description for Project Three goes here."
  }
];

const Works: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(workItems[0].id);
  const selected = workItems.find((w) => w.id === selectedId) || workItems[0];

  return (
    <section style={styles.heroContent}>
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
              {workItems.map((item, i) => {

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

        {/* MAIN content */}
        <main style={{ flex: 1, padding: "1.25rem", overflowY: "auto", marginLeft: 380, maxHeight: "80vh" }}>
          <header>
            <h1 style={{ margin: 0, fontSize: 36 }}>{selected.title}</h1>
            <p style={{ marginTop: 6, color: "#9ca3af" }}>{selected.subtitle}</p>
          </header>


          {/* 3x3 Image grid */}
          <section style={{ marginTop: 16 }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 12,
              }}
            >
              {selected.images.map((src, i) => (
                <div key={i} style={{ borderRadius: 12, overflow: "hidden", minHeight: 120 }}>
                  <img
                    src={src}
                    alt={`${selected.title} ${i + 1}`}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
              ))}
            </div>
          </section>


          {/* Description */}
          <section style={{ marginTop: 18 }}>
            <div
              style={{
                background: "rgba(255,255,255,0.02)",
                padding: 16,
                borderRadius: 12,
                color: "#e5e7eb",
                lineHeight: 1.6,
              }}
            >
              {selected.description}
            </div>
          </section>
        </main>

      </div>
    </section>
  );
};

export default Works;