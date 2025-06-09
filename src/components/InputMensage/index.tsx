import { Container } from "./styles";
import { TextInputProps } from "react-native";

export function InputMensage ({...rest}:TextInputProps){
    return(
        <Container
        {...rest}
        />
    )
}