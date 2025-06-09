import styled from "styled-components/native";
import { CaretLeft } from "phosphor-react-native";

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image`
    margin-top: 10px;
    width: 56px;
    height: 56px;
`;
export const BackIcon = styled(CaretLeft)``;

export const ButtonIcon = styled.TouchableOpacity`
flex: 1;
`;
