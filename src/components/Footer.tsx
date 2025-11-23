import { styles } from "../styles/layout";

export default function Footer() {
  return (
    <footer style={styles.footer}>© {new Date().getFullYear()} — Vinshent L. Wianata</footer>
  );
}
