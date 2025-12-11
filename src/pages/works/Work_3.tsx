
import type WorkItem from "./WorkItem";

const workItem: WorkItem = {
  id: "project1",
  title: "Project One",
  subtitle: "Subtitle One",
  images: Array(4).fill("/images/work2_1.png"),
  description: "Description for Project One goes here. Lorem ipsum dolor sit amet.",
  year: "2025"
}


export default function Work_1() {
  return (
    <main style={{ flex: 1, padding: "1.25rem", overflowY: "auto", marginLeft: 380, maxHeight: "80vh" }}>
      <header>
        <h1 style={{ margin: 0, fontSize: 36 }}>{workItem.title}</h1>
        <p style={{ marginTop: 6, color: "#9ca3af" }}>{workItem.subtitle}</p>
      </header>


      {/* 3x3 Image grid */}
      <section style={{ marginTop: 16 }}>
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
          {workItem.description}
        </div>
      </section>
    </main>
  )
}