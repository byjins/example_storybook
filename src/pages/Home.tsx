import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import "./Home.css";

const Home: React.FC = () => {
  const components = [
    {
      name: "Button",
      path: "/button",
      description: "다양한 스타일과 크기의 버튼 컴포넌트",
    },
    {
      name: "Dialog",
      path: "/dialog",
      description: "모달 다이얼로그 컴포넌트",
    },
    { name: "Select", path: "/select", description: "드롭다운 선택 컴포넌트" },
    {
      name: "DropdownMenu",
      path: "/dropdown-menu",
      description: "드롭다운 메뉴 컴포넌트",
    },
    { name: "Toast", path: "/toast", description: "알림 토스트 컴포넌트" },
    {
      name: "Table",
      path: "/table",
      description: "TanStack Table을 사용한 테이블 컴포넌트",
    },
  ];

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>컴포넌트 라이브러리</h1>
        <p>각 컴포넌트를 독립적으로 테스트하고 커스터마이징할 수 있습니다</p>
      </header>
      <div className="components-grid">
        {components.map((component) => (
          <Link
            key={component.path}
            to={component.path}
            className="component-card"
          >
            <h2>{component.name}</h2>
            <p>{component.description}</p>
            <Button variant="primary" size="small">
              테스트하기 →
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
