import { Container } from "./styles";
import { TextInputProps } from "react-native";

export function Input ({...rest}:TextInputProps){
    return(
        <Container
        PlaceholderTextColor ='#400F33'
        {...rest}
        />
    )
}