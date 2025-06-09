import { Container,
   Content,
    Title,
    Form,   
    SocialButton,     
    Enviar,
    SocialIcon,
    SubTitle,
    Espaco
  } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { InputMensage } from "../../components/InputMensage";
import { Button } from "../../components/Button";
import { CapaContato } from "../../components/Postagens/ContatoCapa";
import { useState } from "react";
import { Linking, Text } from 'react-native';
import WebView from 'react-native-webview';
import { Modal } from "react-native";
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

export function Contato() {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert('Por favor, preencha todos os campos');
      return;
    }
    setVisible(true);
  };

  // Função para abrir o WhatsApp
  const openWhatsApp = () => {
    const phoneNumber = "5541997395043"; // Substitua pelo seu número com DDI e DDD
    const message = "Olá, vim pelo aplicativo!";
    
    const url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        Linking.openURL(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`);
      }
    });
  };

  const htmlForm = `
    <form action="https://formsubmit.io/s/giselle.solyom.fotografia@gmail.com" method="POST">
      <input type="hidden" name="_redirect" value="https://yourwebsite.com/thank-you">
      <input type="hidden" name="name" value="${formData.name}">
      <input type="hidden" name="email" value="${formData.email}">
      <input type="hidden" name="message" value="${formData.message}">
      <button type="submit">Enviar</button>
    </form>
    <script>document.forms[0].submit();</script>
  `;

  return (
    <Container>
      <Espaco/>
       <Espaco/>
        <Espaco/>
        <Espaco/>
        <Espaco/>
        <Espaco/>
        <Espaco/>

      <Header 
        showBackButton 
        onPress={() => navigation.navigate('home')}
      />    
      <CapaContato/>
     

      <Form>
        <SocialButton onPress={openWhatsApp}>
          <FontAwesome name="whatsapp" size={60} color="#25D366" />
         
        </SocialButton>

        <SocialButton onPress={() => Linking.openURL('https://www.instagram.com/giselle.solyom.fotografia/')}>
          <FontAwesome name="instagram" size={60} color="#E1306C" />
          
        </SocialButton>

        <SocialButton onPress={() => Linking.openURL('mailto:giselle.solyom.fotografia@gmail.com')}>
         <MaterialIcons name="email" size={60} color="#400F33" />
          
        </SocialButton>

        <SocialButton onPress={() => Linking.openURL('https://www.facebook.com/giselle.solyom.fotografia')}>
          <FontAwesome name="facebook" size={60} color="#1877F2" />
         
        </SocialButton>
      </Form>
     <Content>
       
        
      </Content>
      <Modal visible={visible} animationType="slide">
        <WebView 
          source={{ html: htmlForm }}
          style={{ flex: 1 }}
          onNavigationStateChange={(navState) => {
            if (navState.url.includes('thank-you')) {
              setVisible(false);
              alert('Mensagem enviada com sucesso!');
            }
          }}       
        />
      <Header/>
      </Modal>
    </Container>
  );
}