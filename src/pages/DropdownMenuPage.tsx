import React, { useState } from "react";
import DropdownMenu from "../components/DropdownMenu/DropdownMenu";
import Button from "../components/Button/Button";
import "./ComponentPage.css";

const DropdownMenuPage: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [action, setAction] = useState("");

  return (
    <div className="component-page">
      <div className="component-page-header">
        <h1>DropdownMenu 컴포넌트</h1>
        <p>드롭다운 메뉴를 테스트하고 커스터마이징할 수 있습니다</p>
      </div>

      <div className="component-page-content">
        <section className="component-section">
          <h2>기본 드롭다운 메뉴</h2>
          <div className="component-demo">
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
                      setAction("편집을 클릭했습니다");
                      setDropdownOpen(false);
                    }}
                  >
                    편집
                  </DropdownMenu.Item>
                  <DropdownMenu.Item
                    onSelect={() => {
                      setAction("복제를 클릭했습니다");
                      setDropdownOpen(false);
                    }}
                  >
                    복제
                  </DropdownMenu.Item>
                  <DropdownMenu.Separator />
                  <DropdownMenu.Item
                    onSelect={() => {
                      setAction("보관을 클릭했습니다");
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
            {action && <p className="action-result">{action}</p>}
          </div>
        </section>

        <section className="component-section">
          <h2>그룹이 있는 메뉴</h2>
          <div className="component-demo">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <Button variant="secondary">그룹 메뉴</Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content>
                  <DropdownMenu.Group>
                    <DropdownMenu.Label>파일</DropdownMenu.Label>
                    <DropdownMenu.Item>새 파일</DropdownMenu.Item>
                    <DropdownMenu.Item>열기</DropdownMenu.Item>
                    <DropdownMenu.Item>저장</DropdownMenu.Item>
                  </DropdownMenu.Group>
                  <DropdownMenu.Separator />
                  <DropdownMenu.Group>
                    <DropdownMenu.Label>편집</DropdownMenu.Label>
                    <DropdownMenu.Item>잘라내기</DropdownMenu.Item>
                    <DropdownMenu.Item>복사</DropdownMenu.Item>
                    <DropdownMenu.Item>붙여넣기</DropdownMenu.Item>
                  </DropdownMenu.Group>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DropdownMenuPage;
