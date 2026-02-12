import type { Preview } from "@storybook/react";
import "../src/styles/themes.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#ffffff",
        },
        {
          name: "dark",
          value: "#1f2937",
        },
      ],
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals?.theme || "light";
      const htmlElement = document.documentElement;

      htmlElement.setAttribute("data-theme", theme);

      return Story();
    },
  ],
  globalTypes: {
    theme: {
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: ["light", "dark"],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
