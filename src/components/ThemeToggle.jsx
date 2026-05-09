export default function ThemeToggle() {
  const toggleTheme = () => {
    document.body.classList.toggle('dark');
  };

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: '10px',
        marginBottom: '20px',
        cursor: 'pointer'
      }}
    >
      Toggle Theme 🌙
    </button>
  );
}