import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CompletePage from "./pages/CompletePage";
import OrderPage from "./pages/OrderPage";
import SummaryPage from "./pages/SummaryPage";

function App(): React.ReactElement {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/summary" element={<SummaryPage />} />
				<Route path="/order" element={<OrderPage />} />
				<Route path="/complete" element={<CompletePage />} />
				{/* 기본 경로 리다이렉션 처리 */}
				<Route path="*" element={<Navigate to="/summary" replace />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
