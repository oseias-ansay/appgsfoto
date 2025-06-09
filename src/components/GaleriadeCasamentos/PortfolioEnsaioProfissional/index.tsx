import { Container, Poste, ImagePost } from "./styles";
import GaleriaCasamentoUm from '../../../assets/GaleriaCasamentoUm.png';
import CapaPortfolioDebutante from '../../../assets/CapaPortfolioDebutante.jpeg';
import CapaEnsaioPerfil from'../../../assets/CapaEnsaiosPerfil.jpeg';
import { TouchableOpacity, Linking } from 'react-native';
import { BaseBoard } from "../../BaseBoard";

export const PortfolioPerfilProfissional = () => {
    const handlePress = () => {
      
        Linking.openURL('https://www.gisellesolyom.com.br/proof/pt-BR/s/perfil_profissional');
    };

    return (
        <Container>
            <TouchableOpacity onPress={handlePress}>               
                    <ImagePost source={CapaEnsaioPerfil} resizeMode="cover" />              
            </TouchableOpacity>
        <BaseBoard showBackButton/>
        </Container>
    );
}