import { useId } from "react";

const SummaryPage = () => {
	const checkboxId = useId();
	return (
		<div>
			<form action="">
				<label htmlFor={checkboxId}>
					I confirm that I have read the terms and conditions
				</label>
				<input type="checkbox" checked={false} id={checkboxId} />
			</form>
		</div>
	);
};

export default SummaryPage;
