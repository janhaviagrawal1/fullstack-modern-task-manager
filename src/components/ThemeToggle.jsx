export default function ThemeToggle() {
  return (
    <button
      onClick={() => document.documentElement.classList.toggle('dark')}
      style={{ marginBottom: '20px' }}
    >
      Toggle Theme 🌙
    </button>
  );
}