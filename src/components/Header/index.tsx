import { Container,Logo,BackIcon,ButtonIcon} from "./styles";
import LogoImg from '../../assets/LogoImg.jpeg'; 
import { CaretLeft } from "phosphor-react-native";



export function Header() {
    return (
        <Container>
        <ButtonIcon>
            <BackIcon size={36} color="#400F33" />
        </ButtonIcon>
        
        <Logo source={LogoImg} />
        </Container>
    );
}