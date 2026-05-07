import axios from "axios";
import { useEffect, useState } from "react";
import ErrorBanner from "./ErrorBanner";
import Option from "./Option";
import Product from "./Product";

const Type = ({ orderType }: { orderType: string }) => {
	// 상태 관리
	const [items, setItems] = useState<any[]>([]);
	const [error, setError] = useState(false);

	const ItemComponent: React.ComponentType<any> =
		orderType === "products" ? Product : Option;

	useEffect(() => {
		const loadItems = async (orderType: string) => {
			try {
				const response = await axios.get(`http://localhost:4000/${orderType}`);
				setItems(response.data);
			} catch (error) {
				console.error(error);
				setError(true);
			}
		};

		loadItems(orderType);
	}, [orderType]);

	if (error) {
		return <ErrorBanner message="에러가 발생했습니다." />;
	}

	return (
		<div style={{ textAlign: "left" }}>
			<h2>주문 종류</h2>
			<p>하나의 가격</p>
			<p>총 가격 :</p>
			<div
				style={{
					display: "flex",
					flexDirection: orderType === "options" ? "column" : "row",
				}}
			>
				{items.map((item) => (
					<ItemComponent
						key={item.id}
						name={item.name}
						imagePath={item.imagePath}
						updateItemCount={() => {}}
					/>
				))}
			</div>
		</div>
	);
};

export default Type;
