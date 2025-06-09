import { Container, Poste, ImagePost } from "./styles";
import GaleriaCasamentoUm from '../../../assets/GaleriaCasamentoUm.png';
import CapaPortfolioCasamentos from '../../../assets/CapaPortfolioCasamentos.jpeg';
import { TouchableOpacity, Linking } from 'react-native';
import { BaseBoard } from "../../BaseBoard";

export const Liege = () => {
    const handlePress = () => {
      
        Linking.openURL('https://www.gisellesolyom.com.br/proof/pt-BR/s/bia_e_vini');
    };

    return (
        <Container>
            <TouchableOpacity onPress={handlePress}>               
                    <ImagePost source={CapaPortfolioCasamentos} resizeMode="cover" />              
            </TouchableOpacity>
        <BaseBoard showBackButton/>
        </Container>
    );
}