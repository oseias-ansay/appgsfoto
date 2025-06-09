import { Container, Poste, ImagePost} from "./styles";
import FotoEnviarFoto from '../../../assets/FotoEnviarFoto.jpg'
import FotoVejaEnsaio from '../../../assets/FotoVejaEnsaio.png';
import FotosConvidadosCompartilhar from '../../../assets/FotoConvidadosCompartilhar.png';
import { Modal, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../../../routes/types";
import { WebView } from 'react-native-webview';
import { useState } from "react";

import { BaseBoard } from "../../BaseBoard";

export function AnaCeciliaEnviar() {
    const navigation = useNavigation();
    const [visible, setVisible] = useState(false);

    function GoBack() {
        setVisible(false); // Fecha o modal
        navigation.navigate(ROUTES.DEBUTANTE); // Navega de volta
    }

    return (
        <Container>
            <Poste onPress={() => setVisible(true)}>
                <ImagePost source={FotoEnviarFoto} resizeMode="cover" />
            </Poste>

            <Modal visible={visible} animationType="slide">
                <WebView 
                    source={{ uri: 'https://photos.app.goo.gl/4aj7Azwbu533cei67' }}
                    style={{ flex: 1 }} 
                />
                
                <BaseBoard showBackButton onPress={GoBack} />
            
            </Modal>
        </Container>
    );
}