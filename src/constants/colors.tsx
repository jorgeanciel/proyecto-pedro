export const myColors = {
  primary: "#7354D3",
  dark: "#29273e",
  secondary: "#FFD466",
  tertiary: "#4439F2",
  "gray-1": "#424b5a",
  "gray-2": "#8994a5",
  "gray-3": "#bec9da",
  "gray-4": "#eeeeee",
  "gray-5": "#f7f7f7",
  "gray-6": "#d8d8d8",
  "danger-light": "#f56564",
};

export type TColor = "primary" | "secondary" | "white" | "rose-500" | "success";
export type TBgColor = {
  [key in TColor]: string;
};

export const BgColors: TBgColor = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  white: "bg-white",
  "rose-500": "bg-rose-500",
  success: "bg-success",
};
