import styled from "styled-components/native";
import { TouchableOpacity,Image } from "react-native";

export const Container = styled.View`
    width: 100%;
    height: 250px;
    flex: 1;    
    background-color:#C2B5BE;
    align-items: center;  
    margin-top:5px;
`;
export const ImageCard = styled(TouchableOpacity)`
    margin-top: 20px;
    margin-right: 10px;
    width:250px;
    height: 130px;  
    background-color:'#999999'; 
    border-radius: 10px;
    margin-bottom: 60px;
`;
export const Imagem = styled.Image`
    margin-top: 05px;
    width: 100%;
    height: 150%;
    margin-right: 10px;
    border-radius: 10px;
`;