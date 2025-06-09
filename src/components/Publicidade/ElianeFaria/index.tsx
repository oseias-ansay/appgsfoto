import React, { useState } from "react";
import { Modal, View, ScrollView,TouchableOpacity } from "react-native";
import { Container, Poste, ImagePost,Texto,Titulo,Subtitulo,Espaco } from "./styles";
import { BaseBoard } from "../../BaseBoard";
import { ROUTES } from "../../../routes/types";


import FotoElianeFaria from '../../../assets/FotoElianeFaria.jpeg';
import { useNavigation } from "@react-navigation/native";

export const ElianeFaria = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
    function GoBack() {           
            navigation.navigate(ROUTES.HOME);
        } // Navega de volta
  return (
    <Container>
     
      <Poste>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <ImagePost source={FotoElianeFaria} resizeMode="cover" />
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
           <Subtitulo>Uma trajetória de 18 anos de trabalho, com mais de 600 xasamentos realizados</Subtitulo>
        <ImagePost
          source={FotoElianeFaria}
          resizeMode="contain"
          style={{ width: 380, height: 250, marginVertical: 10 }}
        />
        <Texto>Sou apaixonada pela vida.Acredito que o amor que se vê nos detalhes são as verdadeiras pérolas da nossa história: Os olhares, os carinhos, o dia a dia juntos... ... Não importa se ele é expresso numa xícara de café, num bolo quentinho, num filme no sofá ou num beijo. Não importa se a festa é grande ou pequena. Não importa o que se tem, mas o que se é. Eu vivo esta vida em busca desses detalhes que contam o amor. </Texto>
          <Espaco/> 
          <Espaco/>    
          <Espaco/>     
          <Texto>E quando os encontro, eu os fotografo.Fui estilista por 15 anos, trabalhando nas áreas de streetwear em grandes marcas brasileiras e também com Noivas, debutantes e trajes a rigor. Mas foi na Fotografia que me encontrei, de forma que trabalho com tanto amor e prazer, que nem percebo o quanto estou trabalhando!Faço o meu trabalho com meu marido, Oséias Ansay, e meus filhos: Larissa, Louise e Rafael, Todos Fotógrafos!</Texto>
          <Espaco/> 
          <Espaco/>    
          <Espaco/> 
          <Texto>Tenho disponibilidade para fotografar eventos em todo o Brasil e Exterior.Entrego todas as fotos em alta resolução, editadas e sem logomarcas, em um Pendrive lindo, e num Álbum, ambos com vários diferenciais que vocês têm que conhecer! Um verdadeiro acervo cuidadosamente elaborado pra vocês!Minhas redes sociais, estão sempre atualizadas, para que vocês possam acompanhar meu trabalho e o meu dia-a-dia.Atendo em meus escritórios em Curitiba e em São José dos Pinhais, ou por video-chat!</Texto>
      </ScrollView>
          
          </View>
        
        </View>
        
      </Modal>
    </Container>
  );
}