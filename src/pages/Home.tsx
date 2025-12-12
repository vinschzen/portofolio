import React from "react";
import HeroCanvas from "../components/HeroCanvas";
import { styles } from "../styles/layout";



// const Home: React.FC = ({ setPage }: { setPage: (p: any) => void }) => (
//   <section>
//     <div style={styles.heroContent}>
//       <h1 style={{ margin: 0, marginTop: '70%' }}>Hi, I'm Vin</h1>
//       <p style={{ marginTop: 8 }}>Fresh Graduate, Data Science. I build things.</p>
//       <button onClick={setPage('contact')} style={styles.cta}>Contact Me</button>
//     </div>
//   </section>
// );


// export default Home;

export default function Home({ setPage }: { setPage: (p: any) => void }) {
  return (
    <section>
      <div style={styles.heroContent}>
        <h1 style={{ margin: 0, marginTop: '70%' }}>Hi, I'm Vin</h1>
        <p style={{ marginTop: 8 }}>Fresh Graduate, Data Science. I build things.</p>
        <button onClick={ () =>  setPage('contact')} style={styles.cta}>Contact Me</button>
      </div>
    </section>
  );
}