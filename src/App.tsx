import React, { useState, useEffect } from "react";
import Button from "./components/Button/Button";
import Dialog from "./components/Dialog/Dialog";
import Select from "./components/Select/Select";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu";
import Toast from "./components/Toast/Toast";
import { getTheme, toggleTheme, loadSavedTheme } from "./utils/theme";
import "./App.css";

const App: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">(getTheme);
  const [selectValue, setSelectValue] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    loadSavedTheme();
    setCurrentTheme(getTheme());
  }, []);

  const handleThemeToggle = () => {
    const newTheme = toggleTheme();
    setCurrentTheme(newTheme);
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setToastOpen(true);
  };

  return (
    <Toast.Provider>
      <div className="app-container">
        <header className="app-header">
          <h1>컴포넌트 데모</h1>
          <Button onClick={handleThemeToggle} variant="primary">
            테마 전환 (현재: {currentTheme === "light" ? "라이트" : "다크"})
          </Button>
        </header>

        <main className="app-main">
          {/* Button Section */}
          <section className="component-section">
            <h2>Button</h2>
            <div className="component-demo">
              <Button variant="primary" size="small">
                Primary Small
              </Button>
              <Button variant="primary" size="medium">
                Primary Medium
              </Button>
              <Button variant="primary" size="large">
                Primary Large
              </Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="danger">Danger</Button>
              <Button disabled>Disabled</Button>
            </div>
          </section>

          {/* Dialog Section */}
          <section className="component-section">
            <h2>Dialog</h2>
            <div className="component-demo">
              <Dialog
                triggerText="다이얼로그 열기"
                title="다이얼로그 제목"
                description="이것은 다이얼로그 설명입니다."
              >
                <div className="dialog-content-wrapper">
                  <p>다이얼로그 내용을 여기에 추가할 수 있습니다.</p>
                  <div className="dialog-actions">
                    <Button variant="secondary">취소</Button>
                    <Button variant="primary">확인</Button>
                  </div>
                </div>
              </Dialog>
            </div>
          </section>

          {/* Select Section */}
          <section className="component-section">
            <h2>Select</h2>
            <div className="component-demo">
              <Select.Root value={selectValue} onValueChange={setSelectValue}>
                <Select.Trigger>
                  <Select.Value placeholder="옵션을 선택하세요" />
                  <Select.Icon />
                </Select.Trigger>
                <Select.Portal>
                  <Select.Content>
                    <Select.Viewport>
                      <Select.Group label="과일">
                        <Select.Item value="apple">사과</Select.Item>
                        <Select.Item value="banana">바나나</Select.Item>
                        <Select.Item value="orange">오렌지</Select.Item>
                      </Select.Group>
                      <Select.Separator />
                      <Select.Group label="채소">
                        <Select.Item value="carrot">당근</Select.Item>
                        <Select.Item value="broccoli">브로콜리</Select.Item>
                        <Select.Item value="spinach">시금치</Select.Item>
                      </Select.Group>
                    </Select.Viewport>
                  </Select.Content>
                </Select.Portal>
              </Select.Root>
              {selectValue && (
                <p className="selected-value">선택된 값: {selectValue}</p>
              )}
            </div>
          </section>

          {/* DropdownMenu Section */}
          <section className="component-section">
            <h2>DropdownMenu</h2>
            <div className="component-demo">
              <div style={{ position: "relative", display: "inline-block" }}>
                <DropdownMenu.Root
                  open={dropdownOpen}
                  onOpenChange={setDropdownOpen}
                >
                  <DropdownMenu.Trigger asChild>
                    <Button variant="primary">메뉴 열기</Button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Portal>
                    <DropdownMenu.Content>
                      <DropdownMenu.Item
                        onSelect={() => {
                          showToast("편집을 클릭했습니다");
                          setDropdownOpen(false);
                        }}
                      >
                        편집
                      </DropdownMenu.Item>
                      <DropdownMenu.Item
                        onSelect={() => {
                          showToast("복제를 클릭했습니다");
                          setDropdownOpen(false);
                        }}
                      >
                        복제
                      </DropdownMenu.Item>
                      <DropdownMenu.Separator />
                      <DropdownMenu.Item
                        onSelect={() => {
                          showToast("보관을 클릭했습니다");
                          setDropdownOpen(false);
                        }}
                      >
                        보관
                      </DropdownMenu.Item>
                      <DropdownMenu.Item disabled>
                        삭제 (비활성화)
                      </DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Portal>
                </DropdownMenu.Root>
              </div>
              <div style={{ marginLeft: "1rem" }}>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  상태: {dropdownOpen ? "열림" : "닫힘"}
                </p>
              </div>
            </div>
          </section>

          {/* Toast Section */}
          <section className="component-section">
            <h2>Toast</h2>
            <div className="component-demo">
              <Button
                variant="primary"
                onClick={() => showToast("기본 토스트 메시지입니다")}
              >
                기본 토스트 표시
              </Button>
              <Button
                variant="secondary"
                onClick={() => showToast("액션이 있는 토스트 메시지입니다")}
              >
                액션 토스트 표시
              </Button>
            </div>
          </section>

          {/* Toast Component */}
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
        </main>
      </div>
    </Toast.Provider>
  );
};

export default App;
