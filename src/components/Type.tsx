import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { OrderContext } from "../context/OrderContext";
import ErrorBanner from "./ErrorBanner";
import Option from "./Option";
import Product from "./Product";

const Type = ({ orderType }: { orderType: string }) => {
	// 상태 관리
	const [items, setItems] = useState<any[]>([]);
	const [isError, setIsError] = useState(false);
	const { totalAmount, updateItemCount } = useContext(OrderContext);

	const ItemComponent: React.ComponentType<any> =
		orderType === "products" ? Product : Option;
	const pricePerItem = {
		products: 1000,
		options: 500,
	};

	// 아이템 개수 업데이트 처리
	const handleUpdateItemCount = (itemName: string, newItemCount: number) => {
		updateItemCount(
			itemName,
			newItemCount,
			orderType as "products" | "options",
		);
	};

	useEffect(() => {
		const loadItems = async (orderType: string) => {
			try {
				const response = await axios.get(`http://localhost:4000/${orderType}`);
				setItems(response.data);
			} catch (error) {
				console.error(error);
				setIsError(true);
			}
		};

		loadItems(orderType);
	}, [orderType]);

	if (isError) {
		return <ErrorBanner message="에러가 발생했습니다." />;
	}

	return (
		<div style={{ textAlign: "left" }}>
			<h2>주문 종류</h2>
			<p>
				하나의 가격:{" "}
				{orderType === "products"
					? pricePerItem.products
					: pricePerItem.options}
			</p>
			<p>
				총 가격:{" "}
				{orderType === "products" ? totalAmount.products : totalAmount.options}
			</p>
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
						updateItemCount={handleUpdateItemCount}
					/>
				))}
			</div>
		</div>
	);
};

export default Type;
