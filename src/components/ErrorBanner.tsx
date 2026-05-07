const ErrorBanner = ({ message }: { message: string }) => {
	return <div style={{ color: "red" }}>{message || "에러 발생"}</div>;
};

export default ErrorBanner;
