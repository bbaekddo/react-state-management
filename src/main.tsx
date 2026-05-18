import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import OrderContextProvider from "./context/OrderContext.tsx";

const rootElement = document.getElementById("root");

if (rootElement) {
	createRoot(rootElement).render(
		<StrictMode>
			<OrderContextProvider>
				<App />
			</OrderContextProvider>
		</StrictMode>,
	);
} else {
	console.error("Root 요소를 찾을 수 없습니다.");
}
