import { Container, Espaco } from "./styles";
import { ScrollView, Text, View } from "react-native";
import { MartaMelo } from "../MartaMelo";
import { ElianeFaria } from "../ElianeFaria";
import { Taylor } from "../Taylor";

export function PublicidadeCard(){
  return(
    <Container style={{backgroundColor: 'pink', height: 160}}>
      <ScrollView horizontal style={{height: 160}}>
        <View style={{width: 250, height: 150, backgroundColor: '#F2F2F2', justifyContent: 'center', alignItems: 'center'}}>
          <MartaMelo/>
        </View>
        <Espaco/>
        <View style={{width: 250, height: 150, backgroundColor: '#F2F2F2', justifyContent: 'center', alignItems: 'center'}}>
          <ElianeFaria/>
        </View>
        
      </ScrollView>
    </Container>
  )
}