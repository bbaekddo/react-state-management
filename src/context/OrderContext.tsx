import { createContext, useEffect, useMemo, useState } from "react";

// 타입 정의
type OrderCount = {
	products: Map<string, number>;
	options: Map<string, number>;
};
type TotalAmount = {
	products: number;
	options: number;
	total: number;
};
type OrderContextValue = {
	orderCount: OrderCount;
	totalAmount: TotalAmount;
	updateItemCount: (
		itemName: string,
		newItemCount: number,
		orderType: OrderType,
	) => void;
	resetItemCount: () => void;
};
type OrderType = "products" | "options";

// context 생성
export const OrderContext = createContext<OrderContextValue>({
	orderCount: { products: new Map(), options: new Map() },
	totalAmount: { products: 0, options: 0, total: 0 },
	updateItemCount: () => {},
	resetItemCount: () => {},
});

// 합계 산출
const calculateSubTotalAmount = (
	orderType: OrderType,
	orderCount: OrderCount,
	pricePerItem: number,
) => {
	const orderCountMap = orderCount[orderType];
	let totalAmount = 0;
	orderCountMap.forEach((count) => {
		totalAmount += count;
	});

	return totalAmount * pricePerItem;
};

function OrderContextProvider({ children }: { children: React.ReactNode }) {
	// 상태 관리
	const [orderCount, setOrderCount] = useState<OrderCount>({
		products: new Map(),
		options: new Map(),
	});
	const [totalAmount, setTotalAmount] = useState<TotalAmount>({
		products: 0,
		options: 0,
		total: 0,
	});
	const pricePerItem = {
		products: 1000,
		options: 500,
	};

	const value = useMemo(() => {
		// 상품 옵션 개수 업데이트
		function updateItemCount(
			itemName: string,
			newItemCount: number,
			orderType: OrderType,
		) {
			setOrderCount((prevOrderCount) => {
				const newOrderCountMap = new Map(prevOrderCount[orderType]);
				newOrderCountMap.set(itemName, Number(newItemCount));

				return {
					...prevOrderCount,
					[orderType]: newOrderCountMap,
				};
			});
		}

		// 상품 옵션 개수 초기화
		function resetItemCount() {
			setOrderCount({
				products: new Map(),
				options: new Map(),
			});
		}

		return { orderCount, totalAmount, updateItemCount, resetItemCount };
	}, [orderCount, totalAmount]);

	// 합계 렌더링
	useEffect(() => {
		const productTotalAmount: number = calculateSubTotalAmount(
			"products",
			orderCount,
			pricePerItem.products,
		);
		const optionTotalAmount: number = calculateSubTotalAmount(
			"options",
			orderCount,
			pricePerItem.options,
		);

		setTotalAmount({
			products: productTotalAmount,
			options: optionTotalAmount,
			total: productTotalAmount + optionTotalAmount,
		});
	}, [orderCount, pricePerItem.products, pricePerItem.options]);

	return (
		<OrderContext.Provider value={value}>{children}</OrderContext.Provider>
	);
}

export default OrderContextProvider;
