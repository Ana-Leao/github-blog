import { Card, CardContainer, CardContent} from "./styles";

export function CardProfile() {
  return(
    <CardContainer>
      <Card>
        <CardContent>
          <img src='https://github.com/ana-leao.png' alt="Foto de perfil" />
          <div>
            <strong>Ana Leão</strong>
          </div>
        </CardContent>
      </Card>
    </CardContainer>
  );
}