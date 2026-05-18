import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { OrderContext } from "../../context/OrderContext";

// 타입
type OrderHistory = {
	price: number;
	orderNumber: number;
};

const CompletePage = ({ setStep }: { setStep: (step: number) => void }) => {
	// 상태 관리
	const [orderHistory, setOrderHistory] = useState<OrderHistory[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const { totalAmount, resetItemCount } = useContext(OrderContext);

	const handleReturn = () => {
		resetItemCount();
		setStep(0);
	};

	useEffect(() => {
		const orderComplete = async () => {
			try {
				const response = await axios.post(`http://localhost:4000/order`, {
					totals: {
						total: totalAmount.total,
					},
				});

				setOrderHistory(response.data);
			} catch (error) {
				console.error(error);
			} finally {
				setIsLoading(false);
			}
		};
		orderComplete();
	}, [totalAmount]);

	if (isLoading) {
		return <div>로딩 중...</div>;
	}

	const renderOrderRow = (order: OrderHistory) => (
		<tr key={order.orderNumber}>
			<td>{order.orderNumber}</td>
			<td>{order.price}</td>
		</tr>
	);

	return (
		<div>
			<h2>주문이 완료되었습니다.</h2>
			<h3>주문 목록</h3>
			<br />
			{orderHistory.length === 0 ? (
				<p>주문 내역이 없습니다.</p>
			) : (
				<table>
					<thead>
						<tr>
							<th>주문번호</th>
							<th>금액</th>
						</tr>
					</thead>
					<tbody>{orderHistory.map(renderOrderRow)}</tbody>
				</table>
			)}
			<button type="button" onClick={handleReturn}>
				돌아가기
			</button>
		</div>
	);
};

export default CompletePage;
