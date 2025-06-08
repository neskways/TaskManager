import { useTheme } from '../../context/ThemeContext'; // путь к файлу, где у тебя ThemeProvider

export const ThemeToggle = () => {
  
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Переключить тему (текущая: {theme})
    </button>
  );
};