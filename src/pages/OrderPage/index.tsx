import { useContext } from "react";
import Type from "../../components/Type";
import { OrderContext } from "../../context/OrderContext";

const OrderPage = ({ setStep }: { setStep: (step: number) => void }) => {
	// 상태 관리
	const { totalAmount } = useContext(OrderContext);

	return (
		<div style={{ textAlign: "left" }}>
			<h1>Travel Products</h1>
			<div>
				<Type orderType="products" />
			</div>
			<div style={{ display: "flex", marginTop: 20 }}>
				<div style={{ width: "50%" }}>
					<Type orderType="options" />
				</div>
				<div style={{ width: "50%" }}>
					<h2>Total Price: {totalAmount.total}</h2>
					<br />
					<button type="button" onClick={() => setStep(1)}>
						주문
					</button>
				</div>
			</div>
		</div>
	);
};

export default OrderPage;
