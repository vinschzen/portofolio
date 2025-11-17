export default function Footer({dark}: {dark: boolean}) {
  return (
    <footer className={`w-full p-6 text-center text-sm mt-20
    ${dark ? 'bg-gray-900 text-gray-300' : 'bg-white text-gray-600'}`}>© {new Date().getFullYear()} My Portfolio</footer>
  );
}
