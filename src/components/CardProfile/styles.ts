import { styled } from "styled-components";

export const CardContainer = styled.section`
	max-width: 1120px;
	width: 100%;
	margin: 0 auto;
`;

export const Card = styled.div`
	border-radius: 10px;
	background: ${(props) => props.theme["blue-500"]};
	box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
`;

export const CardContent = styled.div`
	display: grid;
	grid-template-columns: repeat(1fr, 2fr);
  
	img {
		width: 148px;
		border-radius: 8px;
	}
`;
