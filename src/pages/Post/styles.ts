import styled from "styled-components";

export const PostContainer = styled.main`
	max-width: 1120px;
	width: 100%;
	margin: 0 auto;
`;

export const PostCard = styled.div`
	background: ${(props) => props.theme["blue-500"]};
	border-radius: 10px;
	box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
	padding: 2rem;
	margin-top: -80px;

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1.25rem;

		a {
			display: flex;
			align-items: center;
			gap: 0.5rem;

			color: ${(props) => props.theme.blue};
			font-size: 0.75rem;
			font-weight: 700;
			cursor: pointer;

			&:hover {
				text-decoration: underline;
				text-underline-offset: 5px;
			}
		}
	}

	h1 {
		font-size: 1.5rem;
		font-weight: 700;
		line-height: 1.95rem;
		color: ${(props) => props.theme.white};
		margin-bottom: 1rem;
	}
`;

export const PostInfo = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;

	span {
		display: flex;
		align-items: center;
		gap: 0.5rem;

		font-size: 1rem;
		font-weight: 400;
		color: ${(props) => props.theme["blue-100"]};
	}
`;

export const PostContent = styled.article`
	padding: 2.5rem 2rem;

	p {
		color: ${(props) => props.theme["gray-200"]};
		line-height: 1.6rem;
	}
`;
