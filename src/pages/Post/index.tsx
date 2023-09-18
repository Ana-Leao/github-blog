import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Header } from "../../components/Header";
import { PostCard, PostContainer, PostContent, PostInfo } from "./styles";
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function Post() {
  return (
    <>
      <Header />
      <PostContainer>
        <PostCard>
          <header>
            <a>
              <FontAwesomeIcon icon={faChevronLeft} />
              <span>VOLTAR</span>
            </a>
            <a>
              <span>VER NO GITHUB</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </header>

          <h1>JavaScript data types and data structures</h1>

          <PostInfo>
            <span>
              <FontAwesomeIcon icon={faGithub} />
              analeao
            </span>
            <span>
              <FontAwesomeIcon icon={faCalendarDay} />
              Há 1 dia
            </span>
            <span>
              <FontAwesomeIcon icon={faComment} />
              5 comentários
            </span>
          </PostInfo>
        </PostCard>

        <PostContent>
          <p>
            Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

            Dynamic typing
            JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

          </p>
        </PostContent>
      </PostContainer>
    </>
  );
}