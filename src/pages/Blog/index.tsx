import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { CardProfile } from "../../components/CardProfile";
import { Header } from "../../components/Header";
import { BlogContainer, CardPost, InputSearchPost, PostContainer } from "./styles";
import { useEffect, useState } from "react";

interface IIssue {
  id: number;
  title: string;
  created_at: string;
  body: string;
}

export function Blog() {
  const [issues, setIssues] = useState<IIssue[]>([]);

  async function getIssues() {
    //api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues
    //https://api.github.com/repos/diego3g/rsxp-2023/issues
    const reponse = await fetch("https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues");
    const data = await reponse.json();

    setIssues(data);
    console.log(data);
  }

  useEffect(() => {
    getIssues();
  }, []);

  return (
    <>
      <Header />
      <BlogContainer>
        <CardProfile />
        <div className="searchPosts">
          <label htmlFor="search">Publicações</label>
          <span>{issues.length} publicações</span>
        </div>
        <InputSearchPost type="text" name="search" id="search" placeholder="Buscar conteúdo" />
        <PostContainer>
          {issues.map((issue) => {
            return (
              <CardPost key={issue.id}>
                <div className="titlePost">
                  <strong>{issue.title}</strong>
                  <span>{formatDistanceToNow(new Date(issue.created_at), {
                    addSuffix: true,
                    locale: ptBR,
                  })}</span>
                </div>
                <p>{issue.title}</p>
              </CardPost>
            )
          })}
        </PostContainer>
      </BlogContainer>
    </>
  );
}