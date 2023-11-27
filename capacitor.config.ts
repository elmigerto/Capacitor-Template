import { CapacitorConfig } from "@capacitor/cli";

let appName = "capacitor-template";
const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: appName,
  webDir: `dist/${appName}`,
  bundledWebRuntime: false,
  server: {
    androidScheme: "https",
  },
};

export default config;
