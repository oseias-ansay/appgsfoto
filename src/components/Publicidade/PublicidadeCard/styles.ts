import styled from "styled-components/native";
import { TouchableOpacity,Image } from "react-native";

export const Container = styled.View`
    
    width: 100%;
    height: 350px;
    flex: 1;    
    background-color:#F2F2F2;
    align-items: center;  
    margin-top:5px;
`;
export const ImageCard = styled(TouchableOpacity)`
    margin-top: 20px;
    margin-right: 10px;
    width:250px;
    height: 132px;  
    background-color:'#999999'; 
    border-radius: 10px;
    margin-bottom: 60px;
`;
export const Imagem = styled.Image`
    margin-top: -50px;
    width: 100%;
    height: 150%;
    margin-right: 10px;
    border-radius: 10px;
`;
 export const Texto = styled.Text`


  font-size:12px;
  font-family:'Roboto';
 `;
 export const Titulo = styled.Text`

  font-size:16px;
  font-family:'Roboto';
  align-items:'left'
 `;
  export const Espaco = styled.View`
    margin-bottom: 5px;
    height:100%;
    `;