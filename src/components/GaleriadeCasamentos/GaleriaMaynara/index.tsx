import { Container, Poste,ImagePost } from "./styles";
import CapaMaynaraPedro from '../../../assets/CapaMaynaraPedro.png'
import CapaPortfolioBebe from '../../../assets/CapaPortfolioBebe.jpeg';

export function Maynara (){
    return(
        <Container>
            <Poste>
            <ImagePost source={CapaPortfolioBebe}resizeMode="cover" />
            </Poste>
        </Container>
    )
}