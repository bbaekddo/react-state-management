type ProductProps = {
	name: string;
	imagePath: string;
	updateItemCount: (itemName: string, newItemCount: number) => void;
};

const Product = ({ name, imagePath, updateItemCount }: ProductProps) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		updateItemCount(name, Number(e.target.value));
	};

	return (
		<div style={{ textAlign: "center" }}>
			<img
				style={{ width: "75%" }}
				src={`http://localhost:4000/${imagePath}`}
				alt={`${name} product`}
			/>
			<form style={{ marginTop: "10px" }}>
				<label htmlFor={name} style={{ textAlign: "right" }}>
					{name}
				</label>
				<input
					id={name}
					style={{ marginLeft: 7 }}
					type="number"
					name="quantity"
					min="0"
					defaultValue={0}
					onChange={handleChange}
				/>
			</form>
		</div>
	);
};

export default Product;
