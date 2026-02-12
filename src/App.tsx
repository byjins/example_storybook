import React, { useState, useEffect } from "react";
import Button from "./components/Button/Button";
import { getTheme, toggleTheme, loadSavedTheme } from "./utils/theme";

const App: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">(getTheme);

  useEffect(() => {
    loadSavedTheme();
    setCurrentTheme(getTheme());
  }, []);

  const handleThemeToggle = () => {
    const newTheme = toggleTheme();
    setCurrentTheme(newTheme);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>React Storybook Example</h1>
      <p>Storybook을 실행하려면 npm run storybook을 실행하세요.</p>
      <div style={{ marginTop: "2rem" }}>
        <Button onClick={handleThemeToggle} variant="primary">
          테마 전환 (현재: {currentTheme === "light" ? "라이트" : "다크"})
        </Button>
      </div>
    </div>
  );
};

export default App;
