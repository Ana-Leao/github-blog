import styled from "styled-components";

export const BlogContainer = styled.main`
	max-width: 1120px;
	width: 100%;
	margin: 0 auto;
	padding-bottom: 14rem;

	.searchPosts {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 0.75rem;

		label {
			font-size: 1.25rem;
			font-weight: 700;
			line-height: 1.8rem;
		}

		span {
			font-size: 0.875rem;
			font-weight: 400;
			color: ${(props) => props.theme["blue-100"]};
		}
	}
`;

export const InputSearchPost = styled.input`
	width: 100%;
	padding: 0.75rem 1rem;
	margin-bottom: 3rem;

	border-radius: 6px;
	border: 1px solid ${(props) => props.theme["blue-300"]};
	background: ${(props) => props.theme["blue-900"]};

	&::placeholder {
		color: ${(props) => props.theme["blue-200"]};
	}
`;

export const PostContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 2rem;
`;
export const CardPost = styled.section`
	padding: 2rem;
	background: ${(props) => props.theme["blue-400"]};
	border-radius: 10px;
	border: 1px solid transparent;
	transition: border 0.3s;

	&:hover {
		border: 1px solid ${(props) => props.theme["blue-200"]};
	}

	.titlePost {
		display: flex;
		justify-content: space-between;
		align-items: baseline;

		strong {
			width: 283px;
			font-size: 1.25rem;
			font-weight: 700;
			line-height: 2rem;
		}

		span {
			color: ${(props) => props.theme["blue-100"]};
			font-size: 0.875rem;
			font-weight: 400;
		}
	}

	p {
		color: ${(props) => props.theme["gray-200"]};
	}
`;
