import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { PDF } from "../PDF";
import { Button, Page, Title } from "./style";

export const App = () => {
	const componentRef = useRef(null);

	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
		documentTitle: "Projeto-React-PDF",
	});

	return (
		<Page>
			<Title>Acessar PDF</Title>
			<Button
				onClick={handlePrint}
			>
        Clique aqui
			</Button>

			<div style={{display: "none"}}>
				<PDF componentRef={componentRef} />
			</div>
		</Page>
	);
};
