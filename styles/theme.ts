const theme = {
  colors: {
    "purple-50": "#faf5ff",
    "purple-100": "#f3e8ff",
    "purple-200": "#e9d5ff",
    "purple-300": "#d8b4fe",
    "purple-400": "#c084fc",
    "purple-500": "#a855f7",
    "purple-600": "#9333ea",
    "purple-700": "#7e22ce",
    "purple-800": "#6b21a8",
    "purple-900": "#581c87",
    "purple-950": "#3b0764",
    "neutral-50": "#fafafa",
    "neutral-100": "#f5f5f5",
    "neutral-200": "#e5e5e5",
    "neutral-300": "#d4d4d4",
    "neutral-400": "#a3a3a3",
    "neutral-500": "#737373",
    "neutral-600": "#525252",
    "neutral-700": "#404040",
    "neutral-800": "#262626",
    "neutral-900": "#171717",
    "neutral-950": "#0a0a0a",
    "green-300": "#86EFAC",
    "green-600": "#16A34A",
    "yellow-500": "#EAB308",
    "yellow-600": "#CA8A04",
    "pink-600": "#DB2777",
    "orange-500": "#F97316",
    "zinc-300": "#D4D4D8",
    "slate-300": "#CBD5E1",
    white: "#ffffff",
    "disabled-text": "#bebebe",
    "disabled-bg": "#eee",
    black: "rgba(0, 0, 0)",
    "black/50": "rgba(0, 0, 0, 0.5)",
  },
  rounded: {
    small: 4,
    medium: 8,
    large: 16,
    full: 50,
  },
};

export default theme;

export const calendarTheme = {
  backgroundColor: theme.colors["purple-50"],
  calendarBackground: theme.colors["purple-50"],
  textSectionTitleColor: theme.colors["neutral-700"],
  selectedDayBackgroundColor: theme.colors["purple-700"],
  selectedDayTextColor: theme.colors["white"],
  todayTextColor: theme.colors["purple-700"],
  dayTextColor: "#2d4150",
  textDisabledColor: "#dd99ee",
  arrowColor: theme.colors["neutral-700"],
  // textSectionTitleDisabledColor: "#d9e1e8",
  // dotColor: "#00adf5",
  // selectedDotColor: "#ffffff",
  // disabledArrowColor: "#d9e1e8",
  // monthTextColor: "blue",
  // indicatorColor: "blue",
  // textDayFontFamily: "monospace",
  // textMonthFontFamily: "monospace",
  // textDayHeaderFontFamily: "monospace",
  // textDayFontWeight: "300",
  // textMonthFontWeight: "bold",
  // textDayHeaderFontWeight: "300",
  // textDayFontSize: 16,
  // textMonthFontSize: 16,
  // textDayHeaderFontSize: 16,
};
