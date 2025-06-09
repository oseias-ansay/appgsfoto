import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native";

export const Container = styled(SafeAreaView)`
    margin-top:40px;
    width: 100%;
    height:100%;
    flex: 1;
    background-color: #F2F2F2;
    align-items: left;
    padding: 0 24px;
    margin-bottom:10px;
`; 
export const Content = styled.View`
   
    flex:1;
    margin-top:20px;
    width:100%;
    height:280px;
  
`; 
 export const Title = styled.Text`
    font-size: 18px;
    font-family: 'Robotobold';
    color: #400F33;
 `;
 
export const ImageCard = styled(TouchableOpacity)`
    flex: 1;
    margin-top: 5px;
    width:100%;
    height: 132px;  
    background-color:'#999999'; 
    border-radius: 10px;
    margin-bottom: 60px;
    padding:2px;
`;
export const Imagens = styled.Image`
    flex: 1;
    margin-top: 05px;
    width: 100%;
    height: 150%;
    border-radius: 10px;
`;
export const Destaque = styled.Image`
    flex: 1;
    margin-top: 10px;
    width: 100%;
    height: 150%;
    border-radius: 10px;
`;
export const SubTitle = styled.Text`
   
    align-items: left;
    color:#400F33;
    font-size: 10px;

`;
export const Mensagem = styled.Image`
    flex: 1;
    margin-top: 20px;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    `;
    export const Espaco = styled.View`
    margin-bottom: 5px;
    `;