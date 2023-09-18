import { styled } from "styled-components";

// export const CardContainer = styled.section`
// 	max-width: 1120px;
// 	width: 100%;
// 	margin: 0 auto;
// `;

export const Card = styled.div`
	border-radius: 10px;
	background: ${(props) => props.theme["blue-500"]};
	box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

	margin-top: -80px;
	margin-bottom: 4.5rem;
`;

export const CardContent = styled.div`
	display: flex;
	align-items: center;
	/* justify-content: space-between; */
	padding: 2rem;
	gap: 2rem;

	img {
		width: 148px;
		border-radius: 8px;
	}
`;

export const CardHeader = styled.span`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 0.5rem;

	strong {
		font-size: 1.5rem;
		font-weight: 700;
		line-height: 1.95rem;
	}

	span {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	a {
		font-size: 0.75rem;
		font-weight: 700;
		color: ${(props) => props.theme.blue};
		text-decoration: none;

		&:hover {
			text-decoration: underline;
			text-underline-offset: 5px;
		}
	}
`;

export const CardBody = styled.p`
	font-size: 1rem;
	font-weight: 400;
	line-height: 1.6rem;
	color: ${(props) => props.theme["gray-200"]};
	margin-bottom: 1.5rem;
`;

export const CardFooter = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;

	span {
		display: flex;
		gap: 0.5rem;
	}
`;
