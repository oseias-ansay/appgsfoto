import { Container } from "../BodyRedesSociais/styles";
import { RedesSociaisFace } from "../RedesSociaisFace";
import { RedesSociaisFirst } from "../RedesSociaisFirst";


// Compare this snippet from src/components/RedesSociais/RedesSociaisInstagram/index.tsx:

import { ScrollView } from "react-native";
import { RedesSociaisInsta } from "../RedesSociaisInsta";
import { RedesSociaisTikTok } from "../RedesSociasTikTok";

export function RedesSociais() {
  return (
    <Container >
     <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <RedesSociaisFirst />
      <RedesSociaisFace />
      <RedesSociaisInsta />
      <RedesSociaisTikTok />
     </ScrollView>    
    </Container>
  );
}