import { Container,Logo,BackIcon,ButtonIcon} from "./styles";
import LogoImg from '../../assets/LogoImg.jpeg'; 
import { TouchableOpacityProps } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CaretLeft } from "phosphor-react-native";

type Props = {      
  showBackButton?: boolean;
  onPress?: () => void;
} & TouchableOpacityProps;

export function BaseBoard({ showBackButton = false, onPress, ...rest }: Props) {
const navigation = useNavigation()
function handleGoBack (){
    navigation.goBack
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

        <Logo source={LogoImg} />
        </Container>
    );
}