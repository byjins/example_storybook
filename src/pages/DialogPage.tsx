import React from "react";
import Dialog from "../components/Dialog/Dialog";
import Button from "../components/Button/Button";
import "./ComponentPage.css";

const DialogPage: React.FC = () => {
  return (
    <div className="component-page">
      <div className="component-page-header">
        <h1>Dialog 컴포넌트</h1>
        <p>모달 다이얼로그를 테스트하고 커스터마이징할 수 있습니다</p>
      </div>

      <div className="component-page-content">
        <section className="component-section">
          <h2>기본 다이얼로그</h2>
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

        <section className="component-section">
          <h2>긴 내용 다이얼로그</h2>
          <div className="component-demo">
            <Dialog
              triggerText="긴 내용 다이얼로그"
              title="긴 내용 예제"
              description="스크롤이 필요한 긴 내용을 포함한 다이얼로그입니다."
            >
              <div className="dialog-content-wrapper">
                <p>
                  이것은 매우 긴 내용입니다. 다이얼로그가 스크롤을 처리하는지
                  확인할 수 있습니다.
                </p>
                <p>
                  여러 줄의 텍스트를 추가하여 다이얼로그의 동작을 테스트할 수
                  있습니다.
                </p>
                <p>더 많은 내용을 추가하면 스크롤이 나타나게 됩니다.</p>
                <div className="dialog-actions">
                  <Button variant="secondary">취소</Button>
                  <Button variant="primary">확인</Button>
                </div>
              </div>
            </Dialog>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DialogPage;
