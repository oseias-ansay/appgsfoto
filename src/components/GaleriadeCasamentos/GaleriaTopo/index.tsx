import { Container,FotoBase,TextoBase } from "./styles";
import GaleriaCapa from '../../../assets/GaleriaCapa.png';
import Galeriamensagem from '../../../assets/Galeriamensagem.png';


export function GaleriaTopo (){
    return(
        <Container>
            <FotoBase source ={GaleriaCapa}/>
            <TextoBase/>
            <TextoBase source ={Galeriamensagem}></TextoBase>
        </Container>
    )
}