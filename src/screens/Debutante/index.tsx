import { Header } from "../../components/Header";
import { Container,Content, Espaco,Title} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";


import {  } from "../../components/Postagens/CasamentoFotosOficiais";
import { CasamentoFotosOficiais } from "../../components/Postagens/CasamentoFotosOficiais";
import { EnsaioBeatriz } from "../../components/Postagens/EnsaioBeatriz";
import { AnaCeciliaEnsaio } from "../../components/Postagens/AnaCeciliaEnsaio";
import { AnaCeciliaEnviar } from "../../components/Postagens/AnaCeciliaEnviar";
import { AnaCeciliaFesta } from "../../components/Postagens/AnaCeciliaFesta";
import { FlatListAnuncios } from "../../components/FlatListAnuncios";

import { CasamentoEnviarFotos } from "../../components/Postagens/CasamentoEnviarFoto"; 
import { ImagemTopo } from "../../components/Bodas/ImagemTopo";
import LogoImg from '../../assets/LogoImg.jpeg';
import { MemoriaFamilia } from "../../components/Postagens/MemoriaFamilia";



export function Debutante() {    
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
        <Title>Ana Cecília 15 anos</Title>
       <Content>          
        <AnaCeciliaEnsaio/>
        <AnaCeciliaFesta/>
        <AnaCeciliaEnviar/>
      
        <Espaco/>
        <Espaco/>
        <Espaco/>
       
        </Content> 
          <FlatListAnuncios/>
      
        </ScrollView>   
    </Container>
  );
}