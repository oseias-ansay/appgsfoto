import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
    margin-top:10px;
  width: 100%;  
  height: 80px;

  `;
   export const Poste = styled(TouchableOpacity)`
 
 width: 100%;
    height:100px;
    border-radius: 10px;
     border-width: 2px; 
    border-color: #400F33;
    margin-bottom:10px;
 `;
export const ImagePost = styled.Image`

  width: 100%;
  height:95px;
  border-radius:6px;

  `;

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const ModalContent = styled.View`
  width: 85%;
  background-color: white;
  border-radius: 15px;
  padding: 20px;
`;

export const ModalOption = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 15px 0;
  border-bottom-width: 1px;
  border-bottom-color: #f0f0f0;
`;

export const OptionText = styled.Text`
  margin-left: 15px;
  font-size: 16px;
  color: #333;
 
`;

export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
`;