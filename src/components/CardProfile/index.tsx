import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardBody, CardContent, CardFooter, CardHeader } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";

export function CardProfile() {
  return (
      <Card>
        <CardContent>
          <div>
            <img src='https://github.com/ana-leao.png' alt="Foto de perfil" />
          </div>
          <div>
            <CardHeader>
              <strong>Ana Leão</strong>
              <span>
                <a href="https://github.com/ana-leao" target="_blank">GITHUB</a>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} color="#3294F8" fontSize={12} />
              </span>
            </CardHeader>
            <CardBody>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</CardBody>
            <CardFooter>
              <span>
                <FontAwesomeIcon icon={faGithub} color="#3A536B" fontSize={18} />
                Ana-Leao
              </span>
              <span>
                <FontAwesomeIcon icon={faBuilding} color="#3A536B" fontSize={18} />
                SEAP
              </span>
              <span>
                <FontAwesomeIcon icon={faUserGroup} color="#3A536B" fontSize={18} />
                32 seguidores
              </span>
            </CardFooter>
          </div>
        </CardContent>
      </Card>
  );
}