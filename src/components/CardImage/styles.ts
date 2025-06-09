import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 100%;
    flex: 1;
    
`;

export const ImageCard = styled(TouchableOpacity)`
    margin-top: 20px;
    width:180px;
    height: 132px;  
    background-color:'#999999'; 
    border-radius: 10px;
    margin-bottom: 10px;
`;
export const Equipe = styled.Image`
    margin-top: 05px;
    width: 100%;
    height: 150%;
    border-radius: 10px;
`;