import { Container, Poste, ImagePost } from "./styles";
import GaleriaCasamentoUm from '../../../assets/GaleriaCasamentoUm.png';
import CapaPortfolioDebutante from '../../../assets/CapaPortfolioDebutante.jpeg';
import { TouchableOpacity, Linking } from 'react-native';
import { BaseBoard } from "../../BaseBoard";

export const PortfolioDebutante = () => {
    const handlePress = () => {
      
        Linking.openURL('https://www.gisellesolyom.com.br/proof/pt-BR/s/15_anos_-_debutantes');
    };

    return (
        <Container>
            <TouchableOpacity onPress={handlePress}>               
                    <ImagePost source={CapaPortfolioDebutante} resizeMode="cover" />              
            </TouchableOpacity>
        <BaseBoard showBackButton/>
        </Container>
    );
}