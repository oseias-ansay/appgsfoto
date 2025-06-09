import { Container,FotoBase,TextoBase } from "./styles";
import FotoCapaDebutante from '../../../assets/FotoCapaDebutante.jpeg';
import BeatrizVinicius from '../../../assets/BeatrizVicicius.jpeg';
import BiaVine from '../../../assets/BiaVine.jpeg';
import Fotoodois from '../../../assets/Fotodois.png';
import FotoFestaAnaCecilia from '../../../assets/FotoFestaAnaCecilia.jpg';


export function ImagemTopo (){
    return(
        <Container>
            <FotoBase source ={BiaVine}/>
           
        </Container>
    )
}