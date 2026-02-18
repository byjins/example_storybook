import React, { useState } from "react";
import Select from "../components/Select/Select";
import "./ComponentPage.css";

const SelectPage: React.FC = () => {
  const [selectValue, setSelectValue] = useState("");

  return (
    <div className="component-page">
      <div className="component-page-header">
        <h1>Select 컴포넌트</h1>
        <p>드롭다운 선택 컴포넌트를 테스트하고 커스터마이징할 수 있습니다</p>
      </div>

      <div className="component-page-content">
        <section className="component-section">
          <h2>기본 Select</h2>
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

        <section className="component-section">
          <h2>기본값이 있는 Select</h2>
          <div className="component-demo">
            <Select.Root defaultValue="banana">
              <Select.Trigger>
                <Select.Value />
                <Select.Icon />
              </Select.Trigger>
              <Select.Portal>
                <Select.Content>
                  <Select.Viewport>
                    <Select.Item value="apple">사과</Select.Item>
                    <Select.Item value="banana">바나나</Select.Item>
                    <Select.Item value="orange">오렌지</Select.Item>
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SelectPage;
