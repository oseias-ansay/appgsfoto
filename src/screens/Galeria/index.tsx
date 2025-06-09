import { Header } from "../../components/Header";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Container ,Content,Title,Espaco} from "./styles";
import { GaleriaTopo } from "../../components/GaleriadeCasamentos/GaleriaTopo";
import { ROUTES } from '../../routes/types';
import { FlatList } from "react-native";
import { ScrollView } from "react-native";
import { GaleriaBody } from "../../components/GaleriadeCasamentos/Body";


export function Galeria() {  
  
  const navigation = useNavigation() 
     
   
  return (
    <Container>    
        <Espaco/>
       <Header 
        showBackButton 
        onPress={() => navigation.navigate('home')} 
      />     
    <Title>                  PORTFÓLIO </Title>
    <Content>
      <GaleriaBody/> 
           
    </Content> 
    </Container>
  );
}