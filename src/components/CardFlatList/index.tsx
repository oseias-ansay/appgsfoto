import { Container, ImageCard, Imagem } from "./styles";
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../routes/types';
import { FlatList } from "react-native";

import FotoPortfolio from '../../assets/FotoPortfolio.jpeg';
import FotoContato from '../../assets/FotoContato.jpeg';
import EventodoMomento from '../../assets/EventodoMomento.jpeg';
import CapaDebutante from '../../assets/CapaDebutante.jpeg';

import { useState } from "react";

export function CardFlatList() { 

  const navigation = useNavigation();
    
      const handleNavigate = () => {
      navigation.navigate(ROUTES.CASAMENTO); // Totalmente tipado!
      }

  const [cards, setCards] = useState([
    { id: '1', image: EventodoMomento, route: ROUTES.CASAMENTO },
    { id: '2', image: FotoPortfolio, route: ROUTES.GALERIA },
    { id: '3', image: FotoContato, route: ROUTES.CONTATO },
  ]);   

  return (
    <Container>
        
      <FlatList 
        data={cards}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}  // Usa o ID único de cada item
        renderItem={({ item }) => (
          <ImageCard onPress={() => navigation.navigate(item.route)}>          
            <Imagem source={item.image} resizeMode="cover" /> 
          </ImageCard>
        )}
      />
    </Container>
  );  
}