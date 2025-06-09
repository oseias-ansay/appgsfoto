import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native";

export const Container = styled(SafeAreaView)`
   
    width: 100%;
    flex: 1;
    background-color: #BFB0BB;
    align-items: center;
    padding: 0 24px;
`;  
export const Content = styled.View`
   
    flex:1;
    margin-top:5px;
    width:100%;
    height:300px;
    margin-bottom:50px;
  
   
`; 
 
 export const Imagens = styled.Image`
    flex:1;
    margin-top: 05px;
    width: 100px;
    height: 100px;
    border-radius: 10px;
`;
export const Redes = styled(TouchableOpacity)`
    margin-top:20px;
    width: 65;
    height:65;
    border-radius:6px;
    background-color:#BFB0BB;
    margin-bottom:1px;
    border-image:2px;
    border-color:'black';
    margin-right:20px;
    margin-left:5px;
   
`;
export const Title = styled.Text`
  width: 100%;
    margin-top: 80px;
    margin-left: 0px;
    color:#400F33;
    font-size: 16px;
    align-items:center;
`;
export const SubTitle = styled.Text`
   
    align-items: left;
    color:'#F2f2f2';
    font-size: 20px;

`;

export const Form = styled.View`

  flex-direction: row;
  justify-content: space-around;
  margin:120px 0;
  padding: 0 10px;
  
`;

export const SocialButton = styled.TouchableOpacity`
  align-items: center;
  padding: 10px;
  margin-right:10px;
  background-color: #f8f8f8;
  border-radius: 8px;
  width: 23%;
`;

export const SocialIcon = styled.View`
  margin-bottom: 5px;
`;
export const LogodaGi = styled.Image`
align-items: center;
    width:50;
    height:50;
  padding: 10px;
  margin-right:10px;
  background-color: #f8f8f8;
  border-radius: 8px;
  width: 23%;
`;
export const Enviar = styled(TouchableOpacity)`
    margin-top:20px;
    width: 100%;
    height:60px;
    border-radius:6px;
    background-color:#400F33;
    margin-bottom:1px;
    border-image:2px;
   
`;
export const Espaco = styled.View`
  width:100%;
  height:5px;
`;