import { Header } from "../../components/Header";
import { Container,Content, Espaco} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";


import {  } from "../../components/Postagens/CasamentoFotosOficiais";
import { CasamentoFotosOficiais } from "../../components/Postagens/CasamentoFotosOficiais";
import { EnsaioBeatriz } from "../../components/Postagens/EnsaioBeatriz";

import { CasamentoEnviarFotos } from "../../components/Postagens/CasamentoEnviarFoto"; 
import { ImagemTopo } from "../../components/Bodas/ImagemTopo";
import LogoImg from '../../assets/LogoImg.jpeg';
import { MemoriaFamilia } from "../../components/Postagens/MemoriaFamilia";
import { FlatListAnuncios } from "../../components/FlatListAnuncios";



export function Casamento() {    
 const navigation = useNavigation() 

  return (
    <Container>
      
      <Header 
        showBackButton 
        onPress={() => navigation.navigate('home')} // Adicione esta linha
      />    
        <ScrollView
          showsVerticalScrollIndicator={false}>
        <ImagemTopo/>  
        
       <Content>          
        <CasamentoFotosOficiais/>        
        <EnsaioBeatriz/>
        <CasamentoEnviarFotos/>
        <Espaco/>
        <Espaco/>
        <Espaco/>
        </Content> 
        <Espaco/> 
       
       
        <Espaco/>   
        <Content>
       <FlatListAnuncios/>
       </Content>
        </ScrollView>   
    </Container>
  );
}