# 테마 시스템 가이드

이 프로젝트는 CSS 변수(Custom Properties)를 사용한 다크/라이트 모드 테마 시스템을 사용합니다.

## 구조

### 1. 테마 변수 정의 (`src/styles/themes.css`)

모든 색상과 스타일 값은 CSS 변수로 정의되어 있습니다:

```css
:root {
  --color-bg-primary: #ffffff;
  --color-text-primary: #111827;
  /* ... */
}

[data-theme="dark"] {
  --color-bg-primary: #1f2937;
  --color-text-primary: #f9fafb;
  /* ... */
}
```

### 2. 컴포넌트에서 사용

각 컴포넌트의 CSS 파일에서 하드코딩된 색상 대신 CSS 변수를 사용합니다:

```css
.button--primary {
  background-color: var(--color-button-primary-bg);
  color: var(--color-button-primary-text);
}
```

## 사용 방법

### 기본 사용 (HTML data-theme 속성)

```html
<!-- 라이트 모드 (기본값) -->
<html>
  <body>
    ...
  </body>
</html>

<!-- 또는 명시적으로 라이트 모드 지정 -->
<html data-theme="light">
  <body>
    ...
  </body>
</html>

<!-- 다크 모드 -->
<html data-theme="dark">
  <body>
    ...
  </body>
</html>
```

### JavaScript로 테마 전환

```typescript
import { setTheme, toggleTheme, getTheme } from "./utils/theme";

// 테마 설정
setTheme("dark");
setTheme("light");

// 테마 토글
const newTheme = toggleTheme();

// 현재 테마 확인
const currentTheme = getTheme();
```

### React 컴포넌트에서 사용

```tsx
import { useState, useEffect } from "react";
import { setTheme, getTheme } from "../utils/theme";

const ThemeToggle: React.FC = () => {
  const [theme, setCurrentTheme] = useState<"light" | "dark">(getTheme);

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  const handleToggle = () => {
    setCurrentTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return <button onClick={handleToggle}>현재 테마: {theme}</button>;
};
```

## 테마 변수 목록

### 배경색

- `--color-bg-primary`: 주요 배경색
- `--color-bg-secondary`: 보조 배경색
- `--color-bg-tertiary`: 3차 배경색

### 텍스트 색상

- `--color-text-primary`: 주요 텍스트 색상
- `--color-text-secondary`: 보조 텍스트 색상
- `--color-text-tertiary`: 3차 텍스트 색상

### 버튼 색상

- `--color-button-primary-bg`: Primary 버튼 배경색
- `--color-button-primary-bg-hover`: Primary 버튼 호버 배경색
- `--color-button-primary-text`: Primary 버튼 텍스트 색상
- `--color-button-secondary-bg`: Secondary 버튼 배경색
- `--color-button-secondary-bg-hover`: Secondary 버튼 호버 배경색
- `--color-button-secondary-text`: Secondary 버튼 텍스트 색상
- `--color-button-danger-bg`: Danger 버튼 배경색
- `--color-button-danger-bg-hover`: Danger 버튼 호버 배경색
- `--color-button-danger-text`: Danger 버튼 텍스트 색상

### 다이얼로그 색상

- `--color-dialog-bg`: 다이얼로그 배경색
- `--color-dialog-overlay`: 다이얼로그 오버레이 색상
- `--color-dialog-title`: 다이얼로그 제목 색상
- `--color-dialog-description`: 다이얼로그 설명 색상
- `--color-dialog-close-bg-hover`: 닫기 버튼 호버 배경색
- `--color-dialog-close-text`: 닫기 버튼 텍스트 색상
- `--color-dialog-close-text-hover`: 닫기 버튼 호버 텍스트 색상

### 그림자

- `--shadow-sm`: 작은 그림자
- `--shadow-md`: 중간 그림자
- `--shadow-lg`: 큰 그림자
- `--shadow-xl`: 매우 큰 그림자

## 새로운 컴포넌트 추가 시

1. **CSS 변수 사용**: 하드코딩된 색상 대신 CSS 변수 사용
2. **테마 변수 추가**: 새로운 색상이 필요하면 `themes.css`에 변수 추가
3. **전환 애니메이션**: 색상 변경 시 부드러운 전환을 위해 `transition` 속성 사용

예시:

```css
.my-component {
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
}
```

## Storybook에서 테스트

Storybook의 툴바에서 테마를 전환할 수 있습니다:

- 상단 툴바의 "Theme" 버튼 클릭
- "light" 또는 "dark" 선택

## 장점

1. **중앙 집중식 관리**: 모든 색상이 한 곳에서 관리됨
2. **유지보수 용이**: 색상 변경 시 CSS 변수만 수정하면 됨
3. **성능**: CSS 변수는 네이티브 브라우저 기능으로 빠름
4. **유연성**: 런타임에 테마 전환 가능
5. **재사용성**: 다른 프로젝트에서도 쉽게 적용 가능
