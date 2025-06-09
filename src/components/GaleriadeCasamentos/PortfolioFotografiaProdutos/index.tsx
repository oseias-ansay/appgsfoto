import { Container, Poste, ImagePost } from "./styles";
import CapaPortfolioProdutos from '../../../assets/CapaPortfolioProdututos.jpeg'
import CapaPortfolioFamilia from '../../../assets/CapaPortfolioFamilia.jpeg'
import { TouchableOpacity, Linking } from 'react-native';
import { BaseBoard } from "../../BaseBoard";

export const PortfolioFotografiaProdutos = () => {
    const handlePress = () => {
      
        Linking.openURL('https://www.gisellesolyom.com.br/proof/pt-BR/s/produto');
    };

    return (
        <Container>
            <TouchableOpacity onPress={handlePress}>               
                    <ImagePost source={CapaPortfolioProdutos} resizeMode="cover" />              
            </TouchableOpacity>
        <BaseBoard showBackButton/>
        </Container>
    );
}