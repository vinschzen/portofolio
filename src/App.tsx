import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Contact from './pages/Contact';

import { styles } from './styles/layout';
import HeroCanvas from './components/HeroCanvas';

export default function App() {
  const [page, setPage] = useState<'home' | 'about' | 'works' | 'contact'>('home');

  return (
    <div style={styles.app}>
      <Navbar page={page} setPage={setPage} />
      <main style={styles.main}>
        {page === 'home' && <Home />}
        {page === 'about' && <About />}
        {page === 'works' && <Works />}
        {page === 'contact' && <Contact />}
      </main>
      <footer style={styles.footer}>© {new Date().getFullYear()} — Your Name</footer>
      <HeroCanvas />
    </div>
  );
}

