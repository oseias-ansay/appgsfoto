import React from 'react';
import styled from 'styled-components/native';
import { Linking } from 'react-native';
import { Container,Postagem,TikTokText } from './styles';
import RedesSociaisUm from '../../../assets/RedesSociaisUm.jpeg';




const tiktokUrl = 'https://www.tiktok.com/@fotogi_frenteverso?_t=ZM-8wldMEtBJEm&_r=1'; // Substitua pela URL do vídeo

export function TikTokPostUm() {
  const handlePress = () => {
    Linking.openURL(tiktokUrl);
  };

  return (
    <Postagem onPress={handlePress}>
    
      <Container>
        <Postagem source={RedesSociaisUm} resizeMode="cover" />
      </Container>
    
    </Postagem>
  );
}