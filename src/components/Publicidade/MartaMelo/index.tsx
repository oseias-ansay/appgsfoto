import React, { useState } from "react";
import { Modal, View, ScrollView,TouchableOpacity } from "react-native";
import { Container, Poste, ImagePost,Texto,Titulo,Espaco,Content } from "./styles";
import { BaseBoard } from "../../BaseBoard";
import { Header } from "../../Header";
import { ROUTES } from "../../../routes/types";

import FotoMartaMelo from '../../../assets/FotoMartaMelo.jpeg';
import DestaqueMartaMelo from '../../../assets/DestaqueMartaMelo.jpeg';
import { useNavigation } from "@react-navigation/native";

export const MartaMelo = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
    function GoBack() {           
            navigation.navigate(ROUTES.HOME);
        } // Navega de volta
  return (
    <Container>
      
      <Poste>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <ImagePost source={FotoMartaMelo} resizeMode="cover" />
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
           
       
        <ScrollView 
         showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        >
        <Espaco />
         
           <BaseBoard showBackButton onPress={() => setModalVisible(false)} style={{ marginTop: 5,left:-10}}/>
          <Content> 
          <Titulo>              MARTA MELLO</Titulo>
          <Espaco/>
       
        <ImagePost
          source={DestaqueMartaMelo}
          resizeMode="contain"
          style={{ width: 380, height: 250, marginVertical: 10 }}
        />
        <Espaco/> 
          <Espaco/>    
          <Espaco/>
         
        <Texto>Marta Mello é uma das profissionais mais incríveis que eu já conheci! Com uma energia e alegria inesgotáveis, encanta e realiza o sonho de suas clientes, com muito profissionalismo e criatividade! Marque seu horário já e conheça as últimas novidades!  41 99589-9515</Texto>
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