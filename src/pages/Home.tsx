import React from "react";
import HeroCanvas from "../components/HeroCanvas";
import { styles } from "../styles/layout";

const Home: React.FC = () => (
  <section style={styles.page}>
      <div style={styles.heroContent}>
        <h1 style={{ margin: 0, marginTop: '70%' }}>Hi, I'm Vin</h1>
        <p style={{ marginTop: 8 }}>I build data-driven visual experiences.</p>
        <button style={styles.cta}>See my work</button>
      </div>
  </section>
);


export default Home;