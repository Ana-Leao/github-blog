import styled from "styled-components";

export const BlogContainer = styled.main`
	max-width: 1120px;
	width: 100%;
	margin: 0 auto;
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
`;
