import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  width: 100%;  
  height: 120px;
  `;
  export const Poste = styled(TouchableOpacity)`
 margin-bottom:10px;
  flex: 1;
  width: 100%;
    height:200px;
`;
export const ImagePost = styled.Image`
margin-bottom:10px;
  width: 100%;
  height: 150px;
  `;
