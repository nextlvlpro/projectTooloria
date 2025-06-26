const appMode = "dev";
const devMode = appMode === "dev";
const backendUrl = devMode ? "http://localhost:4000/api" : "https://www.tooloria.org/api";
export { devMode, backendUrl };
