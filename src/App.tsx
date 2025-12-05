import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Contact from './pages/Contact';

import { styles } from './styles/layout';
import HeroCanvas from './components/HeroCanvas';
import Footer from './components/Footer';

export default function App() {
  const [page, setPage] = useState<'home' | 'about' | 'works' | 'contact'>('home');
  const [focused, setFocused] = useState(false)

  return (
    <div style={styles.app}>
      <Navbar page={page} setPage={setPage} />
      <main style={styles.main}>
        {page === 'home' && <Home />}
        {page === 'about' && <About />}
        {page === 'works' && <Works />}
        {page === 'contact' && <Contact />}

        <HeroCanvas page={page}/>

      </main>
      <Footer />
    </div>
  );
}

