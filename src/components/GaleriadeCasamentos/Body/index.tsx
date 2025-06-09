import { Container, Space } from "./styles";
import { Liege } from "../GaleriaLiege";
import { Maynara } from "../GaleriaMaynara";
import { Amanda } from "../GaleriaAmanda/Index";
import { Aline } from "../GaleriaAline";
import { PortfolioCasamentos } from "../PortfolioCasamentos";
import { PortfolioPreWedding } from "../PortFolioPreWedding";
import { PortfolioParto } from "../PortfolioParto";
import { PortfolioFotografiaProdutos } from "../PortfolioFotografiaProdutos";
import { PortfolioAniversarios } from "../PortfolioAniversarios";
import { PortfolioPerfilProfissional } from "../PortfolioEnsaioProfissional";
import { ScrollView } from "react-native";
import { PortfolioFamilia } from "../PortfolioFamilia";
import { Espaco } from "@screens/Casamento/styles";
import { PortfolioDebutante } from "../PortfolioDebutantes";
import { PortfolioGestante } from "../PortfolioGestante";
import { PortfolioBebe } from "../PortfolioBebe";

export function GaleriaBody() {
  return (
    <Container>
     
     <ScrollView>
      <PortfolioCasamentos/>
        <Space/>
        <Space/>
        <Space/>
        <Space/>
        <Space/>
        <Space/>
      <PortfolioPreWedding/>
       
        <Space/>
        <Space/>
        <Space/>
        <Space/>
        <Space/>
        <Space/>
      <PortfolioDebutante/>
        <Space/>
      
        <Space/>
        <Space/>
        <Space/>
        <Space/>
       
      
        <Space/>
      <PortfolioBebe/>
        <Space/>
        <Space/>
        <Space/>
        <Space/>
         <Space/>
        <Space/>
      <PortfolioGestante />
        
        <Space/>
        <Space/>
        <Space/>
        <Space/>
         <Space/>
        <Space/>
      <PortfolioParto/>
         <Space/>
        <Space/>
        <Space/>
        <Space/>
         <Space/>
        <Space/>
      <PortfolioFamilia/>
        <Space/>
        <Space/>
        <Space/>
        <Space/>
         <Space/>
        <Space/>
      <PortfolioAniversarios/>
        <Space/>
        <Space/>
        <Space/>
        <Space/>
         <Space/>
        <Space/>
      <PortfolioPerfilProfissional/>
        <Space/>
        <Space/>
        <Space/>
        <Space/>
         <Space/>
        <Space/>
      <PortfolioFotografiaProdutos/>


       
        <Space/>
        <Space/>
        <Space/>
        <Space/>
         <Space/>
        <Space/>
     </ScrollView>
    </Container>
  );
}