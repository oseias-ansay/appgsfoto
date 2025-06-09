import React, { useState } from "react";
import { Modal, View, ScrollView,TouchableOpacity } from "react-native";
import { Container, Poste, ImagePost,Texto,Titulo,Subtitulo,Espaco,Content } from "./styles";
import { BaseBoard } from "../../BaseBoard";
import { ROUTES } from "../../../routes/types";
import CarolMeigaLogo from'../../../assets/CarolMeigaLogo.png';
import FotoCarolMeiga from '../../../assets/FotoCarolMeiga.jpeg';
import DestaqueCorolMeiga from '../../../assets/DestaqueCarolMeiga.jpeg';
import FotoElianeFaria from '../../../assets/FotoElianeFaria.jpeg';
import { useNavigation } from "@react-navigation/native";

export const CarolMeiga = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
    function GoBack() {           
            navigation.navigate(ROUTES.HOME);
        } // Navega de volta
  return (
    <Container>
     
      <Poste>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <ImagePost source={CarolMeigaLogo} resizeMode="cover" />
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
          <Content>
          <Titulo>             CAROL MEIGA</Titulo>
          <Espaco/>
          
        <ImagePost
          source={DestaqueCorolMeiga}
          resizeMode="contain"
          style={{ width: 380, height: 250, marginVertical: 10 }}
        />
        <Espaco/> 
          <Espaco/>    
          <Espaco/>
        <Texto>A Carol Meiga é a minha escolha para quando quero aquela make parfeita para os grandes momentos da minha vida! Tanto, que foi a escolhida para o casamento da minha filha! Te convido a conhecer esta profissional incrível que vai te fazer sentir-se maravilhosa no seu grande dia! 41 99642-8857</Texto>
          <Espaco/> 
          <Espaco/>    
          <Espaco/>     
          
          <Espaco/> 
          <Espaco/>    
          <Espaco/> 
       
          </Content>
      </ScrollView>
          
          </View>
        
        </View>
        
      </Modal>
    </Container>
  );
}