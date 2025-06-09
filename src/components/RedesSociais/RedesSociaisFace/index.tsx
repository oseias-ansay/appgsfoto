import { Container, Poste, ImagePost } from "./styles";
import RedesSociaisTres from '../../../assets/RedesSociaisTres.jpeg';
import CapaPortfolioCasamentos from '../../../assets/CapaPortfolioCasamentos.jpeg';
import { TouchableOpacity, Linking } from 'react-native';
import { BaseBoard } from "../../BaseBoard";

export const RedesSociaisFace = () => {
    const handlePress = () => {
      
        Linking.openURL('https://www.instagram.com/reel/C9V_e7kMtIv/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==');
    };

    return (
        <Container>
            <TouchableOpacity onPress={handlePress}>               
                    <ImagePost source={RedesSociaisTres} resizeMode="cover" />              
            </TouchableOpacity>
       
        </Container>
    );
}