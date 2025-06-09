import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
    margin-top:10px;
  width: 100%;  
  height: 80px;
  `;
  export const Poste = styled(TouchableOpacity)`
  
  margin-bottom:1px;
  flex: 1;
  width: 100%;
    height:120px;
`;
export const ImagePost = styled.Image`
margin-bottom:10px;
  width: 100%;
  height: 80px;
  `;
 export const Title = styled.Text`
    font-size: 18px;
    color: #400F33;
 `;
 