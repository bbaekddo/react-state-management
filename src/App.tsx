import "./App.css";
import { useState } from "react";
import CompletePage from "./pages/CompletePage";
import OrderPage from "./pages/OrderPage";
import SummaryPage from "./pages/SummaryPage";

function App(): React.ReactElement {
	// 상태 관리
	const [step, setStep] = useState(0);

	return (
		<div>
			{step === 0 && <OrderPage setStep={setStep} />}
			{step === 1 && <SummaryPage setStep={setStep} />}
			{step === 2 && <CompletePage setStep={setStep} />}
		</div>
	);
}

export default App;
