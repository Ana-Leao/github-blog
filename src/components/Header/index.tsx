import { HeaderContainer, HeaderContent } from './styles';
import Logo from '../../assets/Logo.svg';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
       <img src={Logo} alt="Github Blog" />
      </HeaderContent>
    </HeaderContainer>
  );
}