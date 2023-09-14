import { CardProfile } from "../../components/CardProfile";
import { BlogContainer, CardPost, PostContainer } from "./styles";

const posts = [
  {
    id: 1,
    title: 'JavaScript data types and data structures',
    content: 'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.',
    createdAt: 'Há 1 dia',
  },
  {
    id: 2,
    title: 'JavaScript data types and data structures',
    content: 'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.',
    createdAt: 'Há 1 dia',
  }
];

export function Blog() {
  return (
    <BlogContainer>
      <CardProfile />
      <PostContainer>
        {posts.map((post) => {
          return (
            <CardPost key={post.id}>
              <strong>{post.title}</strong>
              <span>{post.createdAt}</span>
              <p>{post.content}</p>
            </CardPost>
          )
        })}
      </PostContainer>

    </BlogContainer>
  );
}