import { Container,ImagePost } from "./styles";
import Fotosete from'../../../assets/Fotosete.png';

export function CapaContato (){
    return(
        <Container>           
            <ImagePost source={Fotosete} resizeMode="cover" />          
        </Container>
    )
}