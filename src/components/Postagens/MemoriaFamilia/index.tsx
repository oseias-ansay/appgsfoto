import React, { useState } from "react";
import { Modal, View, ScrollView,TouchableOpacity } from "react-native";
import { Container, Poste, ImagePost,Texto,Titulo,Subtitulo,Espaco } from "./styles";
import { BaseBoard } from "../../BaseBoard";
import { ROUTES } from "../../../routes/types";
import FotoAplicativo from '../../../assets/FotoAplicativo.png';
import FotoPublicidade from '../../../assets/FotoPublicidade.png';
import { useNavigation } from "@react-navigation/native";

export const MemoriaFamilia = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
    function GoBack() {           
            navigation.navigate(ROUTES.HOME);
        } // Navega de volta
  return (
    <Container>
     
      <Poste>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <ImagePost source={FotoPublicidade} resizeMode="cover" />
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
       
          <Titulo>Uma fábrica de memórias</Titulo>
          <Espaco/>
           <Subtitulo>A história de sua família, em um aplicativo exclusivo</Subtitulo>
        <ImagePost
          source={FotoAplicativo}
          resizeMode="contain"
          style={{ width: 380, height: 250, marginVertical: 10 }}
        />
        <Texto>Nós gostamos de contar histórias: o casamento, a chegada dos filhos, o primeiro aniversário, o crescimento da família. Contamos a história de sua família com fotos , que ficarão eternizadas por toda a vida. </Texto>
          <Espaco/>          
          <Texto>O aplicativo é uma maneira moderna de armazenar e compartilhar as emoções de sua família. A cada evento em família você poderá compartilhar as suas imagens com seus amigos e familia. Sempre que você quiser, estamos a disposição para realizar um ensaio ou evento com a qualidade profissional da Giselle Solyom</Texto>
          <Espaco/>
          <Texto>Tenho disponibilidade para fotografar eventos em todo o Brasil e Exterior.Entrego todas as fotos em alta resolução, editadas e sem logomarcas, em um Pendrive lindo, e num Álbum, ambos com vários diferenciais que vocês têm que conhecer! Um verdadeiro acervo cuidadosamente elaborado pra vocês!Minhas redes sociais, estão sempre atualizadas, para que vocês possam acompanhar meu trabalho e o meu dia-a-dia.Atendo em meus escritórios em Curitiba e em São José dos Pinhais, ou por video-chat!</Texto>
      </ScrollView>
          
          </View>
        
        </View>
        
      </Modal>
    </Container>
  );
}