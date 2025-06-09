import { Container, Poste, ImagePost } from "./styles";
import RedesSociaisDois from '../../../assets/RedesSociasDois.jpeg';
import CapaInstaCorrea from '../../../assets/CapaInstaCorrea.jpeg';
import { TouchableOpacity, Linking } from 'react-native';
import { BaseBoard } from "../../BaseBoard";

export const RedesSociaisFirst = () => {
    const handlePress = () => {
      
        Linking.openURL('https://www.instagram.com/reel/DKUwLnKTU5F/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==');
    };

    return (
        <Container>
            <TouchableOpacity onPress={handlePress}>               
                    <ImagePost source={CapaInstaCorrea} resizeMode="cover" />              
            </TouchableOpacity>
    
        </Container>
    );
}