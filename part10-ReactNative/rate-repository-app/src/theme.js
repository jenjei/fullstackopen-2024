import { Platform } from "react-native";
console.log("Platform.OS", Platform.OS);
const theme = {
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    primary: "#0366d6",
    error: "#d73a4a",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main:
      (Platform.OS === "android" && "Roboto") ||
      (Platform.OS === "ios" && "Arial") ||
      (Platform.OS === "web" && "Courier New"),
    default: "System",
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
  standardPadding: {
    padding: 20,
  },
  standardMargin: {
    marginBottom: 20,
    margin: 20,
  },
};

export default theme;
