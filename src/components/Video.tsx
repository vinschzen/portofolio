import { styles } from "../styles/layout";

export default function Video({video}: {video: string}) {
    return (
      <div style={{ position: "relative", paddingBottom: "56.25%", marginBottom: -95, height: 0 }}>
        <iframe
          src={video}
          title="YouTube video"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "80%",
            height: "80%"
          }}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  }
  
  