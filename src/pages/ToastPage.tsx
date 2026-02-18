import React, { useState } from "react";
import Toast from "../components/Toast/Toast";
import Button from "../components/Button/Button";
import "./ComponentPage.css";

const ToastPage: React.FC = () => {
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (message: string) => {
    setToastMessage(message);
    setToastOpen(true);
  };

  return (
    <Toast.Provider>
      <div className="component-page">
        <div className="component-page-header">
          <h1>Toast 컴포넌트</h1>
          <p>알림 토스트를 테스트하고 커스터마이징할 수 있습니다</p>
        </div>

        <div className="component-page-content">
          <section className="component-section">
            <h2>기본 토스트</h2>
            <div className="component-demo">
              <Button
                variant="primary"
                onClick={() => showToast("기본 토스트 메시지입니다")}
              >
                기본 토스트 표시
              </Button>
            </div>
          </section>

          <section className="component-section">
            <h2>액션이 있는 토스트</h2>
            <div className="component-demo">
              <Button
                variant="secondary"
                onClick={() => showToast("액션이 있는 토스트 메시지입니다")}
              >
                액션 토스트 표시
              </Button>
            </div>
          </section>

          <section className="component-section">
            <h2>긴 메시지 토스트</h2>
            <div className="component-demo">
              <Button
                variant="primary"
                onClick={() =>
                  showToast(
                    "이것은 매우 긴 토스트 메시지입니다. 여러 줄로 표시될 수 있는 긴 내용을 포함하고 있습니다.",
                  )
                }
              >
                긴 메시지 토스트
              </Button>
            </div>
          </section>
        </div>

        <Toast.Root open={toastOpen} onOpenChange={setToastOpen}>
          <Toast.Title>알림</Toast.Title>
          <Toast.Description>{toastMessage}</Toast.Description>
          <Toast.Action
            altText="실행"
            onClick={() => {
              alert("액션이 실행되었습니다");
              setToastOpen(false);
            }}
          >
            실행
          </Toast.Action>
          <Toast.Close />
        </Toast.Root>
      </div>
    </Toast.Provider>
  );
};

export default ToastPage;
