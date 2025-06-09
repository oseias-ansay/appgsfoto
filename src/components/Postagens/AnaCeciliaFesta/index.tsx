import { Container, Poste, ImagePost} from "./styles";
import FotoFestaAnaCecilia from'../../../assets/FotoFestaAnaCecilia.jpg'
import FotoVejaCerimonia from '../../../assets/FotoVejaCerimonia.jpg'
import { Modal, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../../../routes/types";
import { WebView } from 'react-native-webview';
import { useState } from "react";

import { BaseBoard } from "../../BaseBoard";

export function AnaCeciliaFesta() {
    const navigation = useNavigation();
    const [visible, setVisible] = useState(false);

    function GoBack() {
        setVisible(false); // Fecha o modal
        navigation.navigate(ROUTES.DEBUTANTE); // Navega de volta
    }

    return (
        <Container>
            <Poste onPress={() => setVisible(true)}>
                <ImagePost source={FotoFestaAnaCecilia} resizeMode="cover" />
            </Poste>

            <Modal visible={visible} animationType="slide">
                <WebView 
                    source={{ uri: 'https://www.gisellesolyom.com.br/proof/pt-BR/s/bia_e_vini' }}
                    style={{ flex: 1 }} 
                />
                
                <BaseBoard showBackButton onPress={GoBack} />
            
            </Modal>
        </Container>
    );
}