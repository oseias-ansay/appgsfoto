import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native";
import theme from "../../theme";
import { CaretLeft } from "phosphor-react-native";

export const Container = styled(SafeAreaView)`
    margin-top:20px;
    width:100%;
    height: 100%;
  
   
    background-color: '#F2F2F2';
    align-items: center;
    justify-content: center; 
    padding: 20px;     
    `;
export const TextContent = styled.View`

margin-left:45px;
height:120px ;
width:100%;


`;
export const Title = styled.Text(({ theme }) => ({
  width: "100%",
  fontFamily: theme.FONT_FAMILY.BOLD,
  fontSize: "18px",
  marginTop: 10,
  marginLeft: 0,
  color: "#400F33",
  textAlign: "center",
}));
export const Mensagem = styled.Text`

  width: 300px;
    margin-top: 10px;
   
    margin-left: 0px;
    color:#400F33;
    font-size: 13px;
    font-family: 'Roboto';
    align-items:left;
`;
export const SubTitle = styled.Text`
   
    align-items: left;
    color:#400F33;
    font-size: 10px;

`;
export const ImageCard = styled(TouchableOpacity)`
    flex: 1;
    margin-top:-20px;
    width:100%;
    height: 132px;  
    background-color:'#999999'; 
    border-radius: 10px;
    margin-bottom: 40px;
`;
export const Imagens = styled.Image`
    flex: 1;
    margin-top: 05px;
    width: 100%;
    height: 150%;
    border-radius: 10px;
`;
export const Equipe = styled.Image`
    margin-top: 05px;
    width: 100%;
    height: 150%;
    border-radius: 10px;
`;
export const Content = styled.View`
   
   margin-top:-80px;
   width:350px;
   height: 150px;; 

   
   
  
    align-items: left;
    justify-content: center; 
      
    
`;  
export const Foto = styled.Image`
    position: left;
    margin-right: 10px;
    margin-top:1px;
    width: 149px;   
    height:150px;
    border-radius: 5px;
    align-items: left;
`;
export const Block  = styled.View`
  width: 148px ;
  height: 150px;
    background-color: red;
`;
export const Poste = styled(TouchableOpacity)`
  flex: 1;
  width: 100%;
    height:150px;
`;
export const ImagePost = styled.Image`
  width: 100%;
  height: 150px;
  `;
  export const Body = styled.View`
    margin-top: -00px;
   width:100%;
   height: 500px;
    background-color: black;
   
   `;
   export const Espaco = styled.View`
    height: 5px;
   `;