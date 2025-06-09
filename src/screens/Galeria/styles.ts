import styled from "styled-components/native";
import { SafeAreaView } from "react-native";


export const Container = styled(SafeAreaView)`
    margin-top:20px;
    width: 100%;
    flex: 1;
    background-color: #F2F2F2;
    align-items: center;
    padding: 0 24px;
`;  
export const Content = styled.View`
    
    flex:1;
    margin-top:1px;
    width:100%;
    height:100%;
  
   
`; 
 export const Title = styled.Text`

    width:100%;
    font-size: 18px;
    font-family: 'Robotobold';
    color: #400F33;
    align-items:center;
 `;

 export const FotoCapa = styled.Image`
    width: 100%;
    height:240px;
 `;

 export const Espaco = styled.View`
    width: 100%;
    height: 10px;
    
    ;`