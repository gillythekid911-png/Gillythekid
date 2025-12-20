import React, { useEffect, useState } from "react";
import { fetchPopularVideos } from "../services/youtube";

export default function LandingPage() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchPopularVideos()
            .then(setVideos)
            .catch(console.error);
    }, []);

    return (
        <main style={styles.main}>
            <section style={styles.hero}>
                <h1 style={styles.title}>Welcome to GillyTheKid</h1>
                <p style={styles.subtitle}>
                    React + Firebase + YouTube API
                </p>
            </section>

            <section style={styles.grid}>
                {videos.map((video) => (
                    <div key={video.id} style={styles.card}>
                        <img
                            src={video.snippet.thumbnails.medium.url}
                            alt={video.snippet.title}
                            style={styles.thumbnail}
                        />
                        <h3>{video.snippet.title}</h3>
                    </div>
                ))}
            </section>
        </main>
    );
}

const styles = {
    main: {
        fontFamily: "Arial, sans-serif",
    },
    hero: {
        padding: "80px 20px",
        background: "#111",
        color: "#fff",
        textAlign: "center",
    },
    title: {
        fontSize: "3rem",
    },
    subtitle: {
        marginTop: "10px",
        fontSize: "1.2rem",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        padding: "40px",
    },
    card: {
        background: "#f9f9f9",
        padding: "15px",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    },
    thumbnail: {
        width: "100%",
        borderRadius: "6px",
    },
};
import SEO from "../components/SEO";
