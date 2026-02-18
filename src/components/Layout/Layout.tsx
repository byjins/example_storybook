import React from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../Button/Button";
import { getTheme, toggleTheme } from "../../utils/theme";
import "./Layout.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [currentTheme, setCurrentTheme] = React.useState<"light" | "dark">(
    getTheme(),
  );

  const handleThemeToggle = () => {
    const newTheme = toggleTheme();
    setCurrentTheme(newTheme);
  };

  const navItems = [
    { path: "/", label: "홈" },
    { path: "/button", label: "Button" },
    { path: "/dialog", label: "Dialog" },
    { path: "/select", label: "Select" },
    { path: "/dropdown-menu", label: "DropdownMenu" },
    { path: "/toast", label: "Toast" },
    { path: "/table", label: "Table" },
  ];

  return (
    <div className="layout-container">
      <nav className="layout-nav">
        <div className="nav-brand">
          <Link to="/">컴포넌트 라이브러리</Link>
        </div>
        <div className="nav-links">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="nav-actions">
          <Button onClick={handleThemeToggle} variant="secondary" size="small">
            {currentTheme === "light" ? "🌙" : "☀️"}
          </Button>
        </div>
      </nav>
      <main className="layout-main">{children}</main>
    </div>
  );
};

export default Layout;
