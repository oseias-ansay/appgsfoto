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

  width: 100%;
  height: 100px;
  border-radius:6px;
  `;
   export const Texto = styled.Text`

  font-family:'Roboto';
  font-size:11px;
  font-family:'Roboto';
 `;
 export const Titulo = styled.Text`

  font-size:18px;
  font-family:'Robotobold';
  align-items:'left'
 `;
export const Subtitulo = styled.Text`

  font-size:10px;
  font-family:'Roboto';
 `;
export const Espaco = styled.View`
    margin-bottom:8px
`;

