import React, { useState } from "react";
import { Modal, View, TouchableOpacity, FlatList } from "react-native";
import { Container, Poste, ImagePost, Texto, Espaco, Content, Titulo, ImageModa } from "./styles";
import { BaseBoard } from "../../BaseBoard";
import { ROUTES } from "../../../routes/types";
import FotoOqueVestir from '../../../assets/FotoOqueVestir.png';
import ModaUm from '../../../assets/ModaUm.jpg';  
import ModaDois from '../../../assets/ModaDois.jpg';
import ModaTres from '../../../assets/ModaTres.jpg';
import ModaQuatro from '../../../assets/ModaQuatro.jpg'; 
import ModaCinco from '../../../assets/ModaCinco.jpg';
import ModaSeis from '../../../assets/ModaSeis.jpg';
import ModaSete from '../../../assets/ModaSete.jpg';
import ModaOito from '../../../assets/ModaOito.jpg';
import ModaNove from '../../../assets/ModaNove.jpg';
import ModaDez from '../../../assets/ModaDez.jpg';
import ModaOnze from '../../../assets/ModaOnze.jpg';
import ModaDoze from '../../../assets/ModaDoze.jpg';
import ModaTreze from '../../../assets/ModaTreze.jpg';
import ModaQuatorze from '../../../assets/ModaQuatorze.jpg';
import ModaQuinze from '../../../assets/ModaQuinze.jpg';
import ModaDezeseis from '../../../assets/ModaDezeseis.jpg';
import ModaDezesete from '../../../assets/ModaDezesete.jpg';
import ModaDezoito from '../../../assets/ModaDezoito.jpg';
import ModaDezenove from '../../../assets/ModaDezenove.jpg'; 

import { useNavigation } from "@react-navigation/native";

const imagensModa = [
  { id: '1', source: ModaUm },
  { id: '2', source: ModaDois },
  { id: '3', source: ModaTres },
  { id: '4', source: ModaQuatro },
  { id: '5', source: ModaCinco },
  { id: '6', source: ModaSeis },
  { id: '7', source: ModaSete },
  { id: '8', source: ModaOito },
  { id: '9', source: ModaNove },
  { id: '10', source: ModaDez },
  { id: '11', source: ModaOnze },
  { id: '12', source: ModaDoze },
  { id: '13', source: ModaTreze },
  { id: '14', source: ModaQuatorze },
  { id: '15', source: ModaQuinze },
  { id: '16', source: ModaDezeseis },
  { id: '17', source: ModaDezesete },
  { id: '18', source: ModaDezoito },
  { id: '19', source: ModaDezenove }
  // Coloque as demais imagens aqui
];

export const OqueVertir = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  function GoBack() {           
    navigation.navigate(ROUTES.HOME);
  }

  return (
    <Container>
      <Poste>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <ImagePost source={FotoOqueVestir} resizeMode="cover" />
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
          justifyContent: 'flex-start',
          alignItems: 'center'
        }}>
          <View style={{
            backgroundColor: '#F2f2f2',
            padding: 10,
            borderRadius: 10,
            alignItems: 'center'
          }}>
            <BaseBoard showBackButton onPress={() => setModalVisible(false)} style={{ marginTop: 5 }}/>
            <Titulo>O que vestir para o ensaio fotográfico?</Titulo>
          
            <Texto>"Deslize a tela e veja estas dicas super práticas que eu preparei para você!"</Texto>
       

            <FlatList
              data={imagensModa}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <ImageModa source={item.source} resizeMode="contain" />
              )}
              // Se quiser espaçamento entre os cards use ItemSeparatorComponent:
              ItemSeparatorComponent={() => <Espaco />}
              contentContainerStyle={{ alignItems: 'center' }}
            />
          </View>
        </View>
      </Modal>
    </Container>
  );
}