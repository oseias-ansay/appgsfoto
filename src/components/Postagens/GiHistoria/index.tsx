import React, { useState } from "react";
import { Modal, View, ScrollView,TouchableOpacity } from "react-native";
import { Container, Poste, ImagePost,Texto,Titulo,Subtitulo,Espaco } from "./styles";
import { BaseBoard } from "../../BaseBoard";
import { ROUTES } from "../../../routes/types";
import FotoHistoriaGi from '../../../assets/FotoHistoriaGi.png';
import FotoPostagemGi from '../../../assets/FotoPostagemGi.png';
import { useNavigation } from "@react-navigation/native";

export const GiHistoria = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
    function GoBack() {           
            navigation.navigate(ROUTES.HOME);
        } // Navega de volta
  return (
    <Container>
     
      <Poste>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <ImagePost source={FotoPostagemGi} resizeMode="cover" />
        </TouchableOpacity>
      </Poste>
        
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{
          flex: 1,
          backgroundColor: '#F2f2f2',
          justifyContent: 'top',
          alignItems: 'center'
        }}>
          <View style={{
            backgroundColor: '#F2f2f2',
            padding: 20,
            borderRadius: 10,
            alignItems: 'center'
          }}>         
           
          <BaseBoard showBackButton onPress={() => setModalVisible(false)} style={{ marginTop: 5 }}/>
        <ScrollView 
         showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        >
        <Espaco/>
       
          <Titulo>Fotografia, uma grande paixão</Titulo>
          <Espaco/>
           <Subtitulo>Uma trajetória de 18 anos de trabalho, com mais de 600 casamentos realizados</Subtitulo>
        <ImagePost
          source={FotoPostagemGi}
          resizeMode="contain"
          style={{ width: 380, height: 250, marginVertical: 10 }}
        />
        <Texto>A fotografia, para mim, vai muito além de uma profissão: é uma paixão que me permite eternizar emoções. Através das minhas lentes, registro momentos únicos e marcantes na vida das pessoas: a magia de um casamento, a doçura de uma festa de 15 anos, a emoção do nascimento de um filho ou a celebração do aniversário de uma avó. </Texto>
          <Espaco/> 
          <Espaco/>    
          <Espaco/>     
          <Texto>A fotografia é a ferramenta mais poderosa para transformar instantes em memórias afetivas eternas.Participar dessas histórias ao lado dos meus clientes e ajudá-los a preservar suas melhores lembranças é o que me inspira todos os dias.</Texto>
          <Espaco/> 
          <Espaco/>    
          <Espaco/> 
          <Texto>Minha trajetória profissional começou na adolescência, como estilista de moda. Formada em Produção de Moda, trabalhei em diversas empresas, criando coleções para o público infantojuvenil. Foi no universo dos vestidos de noiva e festa, porém, que encontrei minha verdadeira conexão.</Texto>
          <Espaco/>
          <Espaco/>
          <Espaco/>

          <Texto>Em 2006, abracei um novo desafio: fotografar pessoas.Iniciei minha carreira como fotógrafa de moda e editoriais, mas logo descobri meu nicho de coração — as noivas. No ano seguinte, fotografei o casamento de alguns amigos, e foi assim que a fotografia de casamentos entrou definitivamente na minha vida.</Texto>
          <Espaco/>
          <Espaco/>
          <Espaco/>
          <Texto>Hoje, após quase vinte anos de profissão, já registrei mais de 600 casamentos, além de festas de debutantes, aniversários e centenas de ensaios e books. Para mim, cada evento é único e especial. Meu maior prazer é construir histórias através da fotografia, transformando momentos efêmeros em legados emocionais.</Texto>
      
      </ScrollView>
          
          </View>
        
        </View>
        
      </Modal>
    </Container>
  );
}