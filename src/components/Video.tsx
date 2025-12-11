import { styles } from "../styles/layout";

export default function Video({ video }: { video: string }) {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
            }}
        >
            <div style={{ position: "relative", width: "100%", paddingBottom: "57.25%", height: 0 }}>
                <iframe
                    src={video}
                    title="YouTube video"
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    }}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}

