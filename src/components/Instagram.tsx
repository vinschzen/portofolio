import { useEffect } from "react";

export default function InstagramVideo( { url }: { url: string } ) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div 
      style={{ 
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: "#fff",
          border: 0,
          margin: "0 auto",
          padding: 0,
          width: "100%",
          maxWidth: "600px",   
        }}
      ></blockquote>
    </div>
  );
}
