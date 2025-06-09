import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
margin-top:10px;
  margin-top:10px;
  width: 100%;  
  height: 180px;
 
  `;
  export const Poste = styled(TouchableOpacity)`
  margin-top:-100px;

   width: 100%;
  height: 180px;
`;
export const ImagePost = styled.Image`
  margin-top:10px;
  width: 100%;
  height: 180px;
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
