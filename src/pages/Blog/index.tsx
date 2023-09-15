import { CardProfile } from "../../components/CardProfile";
import { Header } from "../../components/Header";
import { BlogContainer, CardPost, InputSearchPost, PostContainer } from "./styles";

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
  },
  {
    id: 3,
    title: 'JavaScript data types and data structures',
    content: 'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.',
    createdAt: 'Há 1 dia',
  },
  {
    id: 4,
    title: 'JavaScript data types and data structures',
    content: 'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.',
    createdAt: 'Há 1 dia',
  }
];

export function Blog() {
  return (
    <>
      <Header />
      <BlogContainer>
        <CardProfile />
        <div className="searchPosts">
          <label htmlFor="search">Publicações</label>
          <span>{posts.length} publicações</span>
        </div>
        <InputSearchPost type="text" name="search" id="search" placeholder="Buscar conteúdo" />
        <PostContainer>
          {posts.map((post) => {
            return (
              <CardPost key={post.id}>
                <div className="titlePost">
                  <strong>{post.title}</strong>
                  <span>{post.createdAt}</span>
                </div>
                <p>{post.content}</p>
              </CardPost>
            )
          })}
        </PostContainer>
      </BlogContainer>
    </>
  );
}