import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`

  width: 100%;  
  height: 100%;
  `;

  export const Content = styled.View`
    width: 360px;  
  height: 250px;
  `;
  export const Poste = styled(TouchableOpacity)`

 width: 100%;
    height:150px;
    border-radius: 10px;
 `;
export const ImagePost = styled.Image`

  width: 100%;
  height: 150px;
  border-radius:6px;
  `;
   export const Texto = styled.Text`


  font-size:12px;
  font-family:'Roboto';
 `;
 export const Titulo = styled.Text`

  font-size:18px;
  font-family:'Roboto';
  align-items:'left'
 `;
export const Subtitulo = styled.Text`

  font-size:10px;
  font-family:'Roboto';
 `;
export const Espaco = styled.View`
    margin-bottom:8px
`;