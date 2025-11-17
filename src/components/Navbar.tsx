import React from "react";
import { styles } from "../styles/layout";

export default function Navbar({ page, setPage }: { page: string; setPage: (p: any) => void }) {
    return (
        <nav style={styles.nav}>
            <div style={styles.brand}>My Portfolio</div>
            <div style={styles.links}>
                <NavButton active={page === 'home'} onClick={() => setPage('home')}>Home</NavButton>
                <NavButton active={page === 'about'} onClick={() => setPage('about')}>About</NavButton>
                <NavButton active={page === 'works'} onClick={() => setPage('works')}>Works</NavButton>
                <NavButton active={page === 'contact'} onClick={() => setPage('contact')}>Contact</NavButton>
            </div>
        </nav>
    );
}

function NavButton({ children, onClick, active = false }: { children: React.ReactNode; onClick: () => void; active?: boolean }) {
    return (
        <button onClick={onClick} style={{ ...styles.navBtn, ...(active ? styles.navBtnActive : {}) }}>
            {children}
        </button>
    );
}
