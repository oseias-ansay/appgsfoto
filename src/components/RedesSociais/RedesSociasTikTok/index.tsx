import { Container, Poste, ImagePost } from "./styles";
import RedesSociaisUm from '../../../assets/RedesSociaisUm.jpeg';
import CapaPortfolioCasamentos from '../../../assets/CapaPortfolioCasamentos.jpeg';
import { TouchableOpacity, Linking } from 'react-native';
import { BaseBoard } from "../../BaseBoard";

export const RedesSociaisTikTok = () => {
    const handlePress = () => {
      
        Linking.openURL('https://www.instagram.com/reel/DAdmxJDxS5B/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==');
    };

    return (
        <Container>
            <TouchableOpacity onPress={handlePress}>               
                    <ImagePost source={RedesSociaisUm} resizeMode="cover" />              
            </TouchableOpacity>
       
        </Container>
    );
}