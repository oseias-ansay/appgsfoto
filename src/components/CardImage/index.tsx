import { ScrollView,FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../routes/types';
import { ImageCard,Equipe, Container} from "./styles";    
import GaleriaFoto from '../../assets/GaleriaFoto.jpeg'; 
import Igreja from '../../assets/Igreja.jpeg';
import Gilinda from '../../assets/Gilinda.jpeg';
import Fotodois from '../../assets/Fotodois.png';

import { Casamento } from "@screens/Casamento";
import { Contato } from "@screens/Contato";
import { Galeria } from "@screens/Galeria";

export function CardImage() {
      const navigation = useNavigation();
    
      const handleNavigate = () => {
      navigation.navigate(ROUTES.CASAMENTO); // Totalmente tipado!

         
        
      };
    return (
       <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>       
        
            <ImageCard onPress={Casamento}>          
                <Equipe source={Fotodois} resizeMode="cover"/>  
            </ImageCard>        
            <ImageCard onPress={Galeria}>          
                <Equipe source={Igreja} resizeMode="cover" />
            </ImageCard>
            <ImageCard onPress={Contato}>          
                <Equipe source={Gilinda} resizeMode="cover" />
            </ImageCard>
        </ScrollView>
    );
}