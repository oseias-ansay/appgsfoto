import { Container, Poste, ImagePost } from "./styles";
import GaleriaCasamentoUm from '../../../assets/GaleriaCasamentoUm.png';
import CapaPortfolioCasamentos from '../../../assets/CapaPortfolioCasamentos.jpeg';
import CapaPortfolioAniversarios from'../../../assets/CapaPortfolioAniversarios.jpeg'
import { TouchableOpacity, Linking } from 'react-native';
import { BaseBoard } from "../../BaseBoard";

export const PortfolioAniversarios = () => {
    const handlePress = () => {
      
        Linking.openURL('https://www.gisellesolyom.com.br/proof/pt-BR/s/aniversario');
    };

    return (
        <Container>
            <TouchableOpacity onPress={handlePress}>               
                    <ImagePost source={CapaPortfolioAniversarios} resizeMode="cover" />              
            </TouchableOpacity>
        <BaseBoard showBackButton/>
        </Container>
    );
}