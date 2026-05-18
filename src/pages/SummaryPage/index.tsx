import { useContext, useId, useState } from "react";
import { OrderContext } from "../../context/OrderContext";

const SummaryPage = ({ setStep }: { setStep: (step: number) => void }) => {
	// 상태 관리
	const checkboxId = useId();
	const [checked, setChecked] = useState<boolean>(false);
	const { orderCount, totalAmount } = useContext(OrderContext);

	const products = Array.from(orderCount.products);
	const productList = products.map(([itemName, itemCount]) => (
		<li key={`key-${itemName}`}>
			{itemName}: {itemCount}
		</li>
	));

	// 옵션을 선택한 경우
	let optionsDisplay = null;
	if (orderCount.options.size > 0) {
		const options = Array.from(orderCount.options.keys());
		const optionsList = options.map((optionName) => {
			return <li key={`key-${optionName}`}>{optionName}</li>;
		});
		optionsDisplay =
			totalAmount.options > 0 ? (
				<>
					<h2>옵션: {totalAmount.options}</h2>
					<ul>{optionsList}</ul>
				</>
			) : null;
	}

	return (
		<div>
			<h1>주문 확인</h1>
			<h2>여행 상품: {totalAmount.products}</h2>
			<ul>{productList}</ul>
			{optionsDisplay}
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
			<button type="submit" disabled={!checked} onClick={() => setStep(2)}>
				주문 확인
			</button>
		</div>
	);
};

export default SummaryPage;
