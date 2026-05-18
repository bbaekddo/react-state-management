const CompletePage = ({ setStep }: { setStep: (step: number) => void }) => {
	return (
		<div>
			<h1>Complete</h1>
			<button type="button" onClick={() => setStep(0)}>
				돌아가기
			</button>
		</div>
	);
};

export default CompletePage;
