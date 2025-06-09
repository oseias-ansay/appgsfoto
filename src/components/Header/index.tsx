import { Container,Logo,BackIcon,ButtonIcon} from "./styles";
import LogoImg from '../../assets/LogoImg.jpeg'; 
import LogoImage from '../../assets/LogoImage.png';
import { TouchableOpacityProps } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CaretLeft } from "phosphor-react-native";

type Props = {      
  showBackButton?: boolean;
  onPress?: () => void;
} & TouchableOpacityProps;

export function Header({ showBackButton = false, onPress, ...rest }: Props) {
const navigation = useNavigation()
function handleGoBack (){
    navigation.navigate('home')
}
    return (
        <Container>
              {showBackButton &&
                <ButtonIcon  
                    showBackButton={showBackButton} 
                    onPress={onPress}
                    {...rest}
                >
                    <BackIcon size={36} color="#66004C" weight="bold" />
                </ButtonIcon>
            }
        

        <Logo source={LogoImage} />
        </Container>
    );
}