import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardBody, CardContent, CardFooter, CardHeader } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";
import { useEffect, useState } from "react";

interface IUser {
  id: number;
  name: string;
  avatar_url: string;
  bio: string;
  login: string;
  company: string;
  html_url: string;
  followers: number;
}

export function CardProfile() {
  const [user, setUser] = useState<IUser>({}) ;


  async function getUser() {
    const response = await fetch("https://api.github.com/users/diego3g")
    const data = await response.json();

    setUser(data);
  }

  useEffect(() => {
    getUser();
  }, [])

  return (
    <Card>
      <CardContent>
        <div>
          <img src={user.avatar_url} alt="Foto de perfil" />
        </div>
        <div>
          <CardHeader>
            <strong>{user.name}</strong>
            <span>
              <a href={user.html_url} target="_blank">GITHUB</a>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} color="#3294F8" fontSize={12} />
            </span>
          </CardHeader>
          <CardBody>
            {user.bio}
            </CardBody>
          <CardFooter>
            <span>
              <FontAwesomeIcon icon={faGithub} color="#3A536B" fontSize={18} />
              {user.login}
            </span>
            <span>
              <FontAwesomeIcon icon={faBuilding} color="#3A536B" fontSize={18} />
              {user.company}
            </span>
            <span>
              <FontAwesomeIcon icon={faUserGroup} color="#3A536B" fontSize={18} />
              {user.followers} seguidores
            </span>
          </CardFooter>
        </div>
      </CardContent>
    </Card>
  );
}