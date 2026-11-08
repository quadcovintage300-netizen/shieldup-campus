export default function ThemeToggle({ darkMode, onToggle }) {
  return (
    <button className="btn btn-outline" aria-pressed={darkMode} onClick={onToggle}>
      {darkMode ? "Light mode" : "Dark mode"}
    </button>
  );
}
