import React from 'react';
import styled from 'styled-components/native';
import { Linking } from 'react-native';
import { Container,Postagem,TikTokText } from './styles';




const tiktokUrl = 'https://vm.tiktok.com/ZMSjAne9L/'; // Substitua pela URL do vídeo

export function TikTokPostUm() {
  const handlePress = () => {
    Linking.openURL(tiktokUrl);
  };

  return (
    <Postagem onPress={handlePress}>
      <TikTokText>Assistir no TikTok</TikTokText>
      <TikTokText>TikTok</TikTokText>
    </Postagem>
  );
}