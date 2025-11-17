import { Link } from "react-router-dom";

export default function Header({dark, toggleDark}: {dark: boolean; toggleDark: () => void}) {
  return (
    <header
    className={`fixed top-0 left-0 w-full px-10 py-4 flex justify-between items-center backdrop-blur-xl z-50 transition-colors duration-300
    ${dark ? 'bg-white/5 text-white border-b border-white/10' : 'bg-black/10 text-gray-900 border-b border-black/10'}`}
    >
        <h1 className="text-xl font-bold">My Portfolio</h1>
          <nav className="flex gap-8 items-center">
          <Link to="/" className="hover:opacity-60">Home</Link>
          <Link to="/projects" className="hover:opacity-60">Projects</Link>
          <Link to="/about" className="hover:opacity-60">About</Link>
          <Link to="/contact" className="hover:opacity-60">Contact</Link>
          <button onClick={toggleDark} className="px-4 py-1 rounded-xl border border-white/30 hover:opacity-70">
              {dark ? 'Light' : 'Dark'}
          </button>
        </nav>
    </header>
  );
}
