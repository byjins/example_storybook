/**
 * 테마 전환 유틸리티 함수
 * 공통 컴포넌트 라이브러리에서 사용할 수 있는 테마 관리 함수들
 */

export type Theme = "light" | "dark";

/**
 * 현재 테마를 가져옵니다
 */
export const getTheme = (): Theme => {
  if (typeof window === "undefined") {
    return "light";
  }

  const htmlElement = document.documentElement;

  if (htmlElement.getAttribute("data-theme") === "dark") {
    return "dark";
  }

  // 시스템 설정 확인
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }

  return "light";
};

/**
 * 테마를 설정합니다
 * @param theme - 설정할 테마 ('light' | 'dark')
 */
export const setTheme = (theme: Theme): void => {
  if (typeof window === "undefined") {
    return;
  }

  const htmlElement = document.documentElement;

  htmlElement.setAttribute("data-theme", theme);

  // localStorage에 저장 (선택사항)
  try {
    localStorage.setItem("theme", theme);
  } catch (e) {
    // localStorage 사용 불가 시 무시
  }
};

/**
 * 테마를 토글합니다
 */
export const toggleTheme = (): Theme => {
  const currentTheme = getTheme();
  const newTheme: Theme = currentTheme === "light" ? "dark" : "light";
  setTheme(newTheme);
  return newTheme;
};

/**
 * 저장된 테마를 불러옵니다 (localStorage에서)
 */
export const loadSavedTheme = (): void => {
  if (typeof window === "undefined") {
    return;
  }

  try {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
    }
  } catch (e) {
    // localStorage 사용 불가 시 무시
  }
};

/**
 * 시스템 테마 변경을 감지하는 리스너를 등록합니다
 * @param callback - 테마 변경 시 호출될 콜백 함수
 * @returns cleanup 함수
 */
export const watchSystemTheme = (
  callback: (theme: Theme) => void,
): (() => void) => {
  if (typeof window === "undefined" || !window.matchMedia) {
    return () => {};
  }

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
    callback(e.matches ? "dark" : "light");
  };

  // 초기값 설정
  handleChange(mediaQuery);

  // 이벤트 리스너 등록
  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  } else {
    // 구형 브라우저 지원
    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }
};
