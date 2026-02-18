import React, { useState } from "react";
import Button from "../components/Button/Button";
import "./ComponentPage.css";

const ButtonPage: React.FC = () => {
  const [clicked, setClicked] = useState<string>("");

  return (
    <div className="component-page">
      <div className="component-page-header">
        <h1>Button 컴포넌트</h1>
        <p>
          다양한 스타일과 크기의 버튼을 테스트하고 커스터마이징할 수 있습니다
        </p>
      </div>

      <div className="component-page-content">
        <section className="component-section">
          <h2>기본 버튼</h2>
          <div className="component-demo">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
          </div>
        </section>

        <section className="component-section">
          <h2>크기별 버튼</h2>
          <div className="component-demo">
            <Button variant="primary" size="small">
              Small
            </Button>
            <Button variant="primary" size="medium">
              Medium
            </Button>
            <Button variant="primary" size="large">
              Large
            </Button>
          </div>
        </section>

        <section className="component-section">
          <h2>상태별 버튼</h2>
          <div className="component-demo">
            <Button variant="primary">활성</Button>
            <Button variant="primary" disabled>
              비활성
            </Button>
          </div>
        </section>

        <section className="component-section">
          <h2>클릭 이벤트</h2>
          <div className="component-demo">
            <Button
              variant="primary"
              onClick={() => setClicked("Primary 버튼이 클릭되었습니다!")}
            >
              클릭해보세요
            </Button>
            {clicked && <p className="click-result">{clicked}</p>}
          </div>
        </section>

        <section className="component-section">
          <h2>커스텀 스타일</h2>
          <div className="component-demo">
            <Button
              variant="primary"
              className="custom-button"
              style={{
                borderRadius: "20px",
                background: "linear-gradient(45deg, #667eea 0%, #764ba2 100%)",
              }}
            >
              커스텀 스타일
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ButtonPage;
