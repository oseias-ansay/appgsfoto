import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  margin-top:10px;
  width: 100%;  
  height: 150px;
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


  font-size:12px;
  font-family:'Roboto';
 `;
 export const Titulo = styled.Text`

  font-size:16px;
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

