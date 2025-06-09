import { Container,Propaganda,FotoPulicidade } from "./styles";
import {FotoPublicidade} from '../../../assets/FotoPublicidade.png'

export function Oseias (){
    return(
        <Container>
            <Propaganda>
                <FotoPulicidade
                         source={FotoPublicidade}
                         resizeMode="contain"
                        
                       />
            </Propaganda>
        </Container>
    )
}