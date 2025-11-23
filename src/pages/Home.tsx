import React from "react";
import HeroCanvas from "../components/HeroCanvas";
import { styles } from "../styles/layout";

const Home: React.FC = () => (
  <section>
      <div style={styles.heroContent}>
        <h1 style={{ margin: 0, marginTop: '70%' }}>Hi, I'm Vin</h1>
        <p style={{ marginTop: 8 }}>Undergradute, Data Science. I build things.</p>
        <button style={styles.cta}>See my work</button>
      </div>
  </section>
);


export default Home;