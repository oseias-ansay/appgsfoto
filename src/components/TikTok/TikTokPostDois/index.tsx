import React from 'react';
import styled from 'styled-components/native';
import { Linking } from 'react-native';
import { Container,ImagePost,Postagem } from './styles';
import RedesSociaisUm from '../../../assets/RedesSociaisUm.jpeg';




const tiktokUrl = 'https://vm.tiktok.com/ZMSjAne9L/'; // Substitua pela URL do vídeo

export function TikTokPostDois() {
  const handlePress = () => {
    Linking.openURL(tiktokUrl);
  };

  return (
    <Postagem onPress={handlePress}>
      <ImagePost source={require('../../../assets/RedesSociaisUm')} resizeMode="cover" />
    </Postagem>
  );
}