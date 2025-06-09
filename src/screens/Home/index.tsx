import { Header } from '../../components/Header';
import {Container,Title, Mensagem,Content, Espaco, TextContent} from './styles';
import { ROUTES } from '../../routes/types';
import {ScrollView, Modal } from 'react-native';
import { CardFlatList } from '../../components/CardFlatList';
import { GiHistoria } from '../../components/Postagens/GiHistoria';
import { CasamentoArLivre } from '../../components/Postagens/CasamentoArLivre';
import { EstilodeFoto } from '../../components/Postagens/EstilodeFoto';
import { MemoriaFamilia } from '../../components/Postagens/MemoriaFamilia';
import { BodyTikTok } from '../../components/TikTok/BodyTikTok';
import { OqueVertir } from '../../components/Postagens/OqueVestir';


import { TextoHome } from '../../components/TextoHome';

import { useNavigation } from '@react-navigation/native';
import { PublicidadeCard } from '../../components/Publicidade/PublicidadeCard';
import { FlatListPublicidade } from '../../components/FlatListPublicidade';
import { Redes } from '@screens/Contato/styles';
import { RedesSociais } from '../../components/RedesSociais/BodyRedesSociais';

export function Home() {
   const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate(ROUTES.GALERIA); // Totalmente tipado!
  };

  return (      
    <Container>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Header />       
        <Title>Giselle Solyom Fotografia</Title>
        <TextContent>
          <Espaco/>
          <Espaco/>    
        <Mensagem> "Contando com arte a sua história. Para você, para as pessoas que você ama e para as pessoas do futuro!"</Mensagem>
        </TextContent>
        <CardFlatList/>
        <Espaco/>
        <GiHistoria/>
        <Espaco/>
        <OqueVertir/>
        
        <Content>
        <FlatListPublicidade/>
        </Content>
          <Espaco/>
          <Espaco/>
          <Espaco/>
          <Espaco/>
        <RedesSociais/>
        <Espaco/>
        <Espaco/>
        <Espaco/>
        <Espaco/>
        <Espaco/>
        <Espaco/>
        <Espaco/>
        <Espaco/>
        <Espaco/>
      
       
        
    
      
        <Espaco/>
        <Espaco/>
        <Espaco/>
    
       
     
          </ScrollView>
    </Container>
  );
}

