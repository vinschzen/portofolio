import React from "react";

export const styles: Record<string, React.CSSProperties> = {
    app: {
        minHeight: '100vh',
        minWidth: '100vw',
        display: 'flex',
        flexDirection: 'column',
        background: '#071023',
        color: '#e6eef8',
        fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue'",
    },
    nav: {
        zIndex: 10,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 16px',
        backdropFilter: 'blur(6px)',
        background: 'rgba(255,255,255,0.03)',
        borderBottom: '1px solid rgba(255,255,255,0.03)',
        flexWrap: 'wrap',
        gap: 12,
    },
    brand: { fontWeight: 700, letterSpacing: 0.6, fontSize: '1.1rem' },
    links: {
        display: 'flex',
        gap: 10,
        flexWrap: 'wrap',
    },
    navBtn: {
        background: 'transparent',
        color: 'inherit',
        border: 'none',
        padding: '6px 10px',
        cursor: 'pointer',
        borderRadius: 8,
        fontSize: '0.95rem',
        whiteSpace: 'nowrap',
    },
    navBtnActive: {
        background: 'rgba(255,255,255,0.04)'
    },
    main: {
        zIndex: 10,
        flex: 1,
        padding: '16px',
        width: '100%',
        boxSizing: 'border-box',
    },
    footer: {
        padding: '12px 8px',
        textAlign: 'center',
        color: 'rgba(230,238,248,0.6)',
        fontSize: '0.85rem',
    },
    heroWrap: {
        // position: 'absolute',
        // left: 0,
        // position: 'relative',
        height: '100vh',
        minHeight: 380,
        borderRadius: 12,
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(2,6,23,0.6)'
    },
    canvasContainer: {
        position: 'absolute',
        inset: 0
    },
    heroContent: {
        position: 'absolute',
        left: 28,
        top: '18%',
        zIndex: 2,
        maxWidth: '80%',
        paddingRight: 12,
    },
    cta: {
        padding: '10px 14px',
        borderRadius: 10,
        border: 'none',
        cursor: 'pointer',
        background: 'linear-gradient(90deg,#6ea8fe,#8b5cf6)',
        color: 'white',
        fontWeight: 600,
        fontSize: '0.9rem',
    },
    pageInner: {
        maxWidth: 860,
        margin: '20px auto',
        lineHeight: 1.6,
        padding: '0 12px',
        width: '100%',
        boxSizing: 'border-box',
    },
    
};
