import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
 
  width: 100%;  
  height: 150px;
  `;
  
  export const Content = styled.View`
    width: 95%;  
  height: 100%
  `;
  export const Poste = styled(TouchableOpacity)`
 
  width: 100%;
    height:100px;
    border-radius: 10px;
 `;
export const ImagePost = styled.Image`
  margin-top:-50px;
  width: 100%;
  height: 100px;
  border-radius:6px;
  `;
   export const Texto = styled.Text`

  margin-bottom:-50px;
  font-size:12px;
  font-family:'Roboto';
 `;
 export const Titulo = styled.Text`
  margin-bottom:5px;
  font-size:18px;
  font-family:'Roboto';
  align-items:'left'
 `;
export const Subtitulo = styled.Text`

  font-size:10px;
  font-family:'Roboto';
 `;
export const Espaco = styled.View`
    margin-bottom:5px
`;
export const ImageModa = styled.Image`
width: 300px;
height: 650px;
border-radius: 10px;
align-items: center;
margin-bottom:-110px;
`;

