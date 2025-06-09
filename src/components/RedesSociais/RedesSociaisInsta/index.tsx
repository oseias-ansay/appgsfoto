import { Container, Poste, ImagePost } from "./styles";
import RedesSociaisDois from '../../../assets/RedesSociasDois.jpeg';
import CapaPortfolioCasamentos from '../../../assets/CapaPortfolioCasamentos.jpeg';
import { TouchableOpacity, Linking } from 'react-native';
import { BaseBoard } from "../../BaseBoard";

export const RedesSociaisInsta = () => {
    const handlePress = () => {
      
        Linking.openURL('https://www.instagram.com/reel/DIhr_wGzoZs/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==');
    };

    return (
        <Container>
            <TouchableOpacity onPress={handlePress}>               
                    <ImagePost source={RedesSociaisDois} resizeMode="cover" />              
            </TouchableOpacity>
    
        </Container>
    );
}