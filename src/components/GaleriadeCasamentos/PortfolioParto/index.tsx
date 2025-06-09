import { Container, Poste, ImagePost } from "./styles";
import GaleriaCasamentoUm from '../../../assets/GaleriaCasamentoUm.png';
import CapaPortfolioParto from '../../../assets/CapaPorfolioParto.jpeg';
import { TouchableOpacity, Linking } from 'react-native';
import { BaseBoard } from "../../BaseBoard";

export const PortfolioParto = () => {
    const handlePress = () => {
      
        Linking.openURL('https://www.gisellesolyom.com.br/proof/pt-BR/s/parto');
    };

    return (
        <Container>
            <TouchableOpacity onPress={handlePress}>               
                    <ImagePost source={CapaPortfolioParto} resizeMode="cover" />              
            </TouchableOpacity>
        <BaseBoard showBackButton/>
        </Container>
    );
}