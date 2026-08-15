import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
const store = configureStore({
  reducer: rootReducer,
});

if (rootElement) {
  const root = createRoot(rootElement);
  const render = () => {
    root.render(
      <StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </StrictMode>,
    );
  };

  store.subscribe(render);
  render();
} else {
  console.error("Root 요소를 찾을 수 없습니다.");
}
