import { useId, useState } from "react";

const SummaryPage = () => {
	// 상태 관리
	const checkboxId = useId();
	const [checked, setChecked] = useState<boolean>(false);

	return (
		<div>
			<form>
				<label htmlFor={checkboxId}>주문하려는 것을 확인하셨나요?</label>
				<input
					type="checkbox"
					checked={checked}
					id={checkboxId}
					onChange={(e) => setChecked(e.target.checked)}
				/>
			</form>
			<br />
			<button type="submit" disabled={!checked}>
				주문 확인
			</button>
		</div>
	);
};

export default SummaryPage;
