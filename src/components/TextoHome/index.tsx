import { Container, Poste, ImagePost } from "./styles";
import Texto from '../../assets/Texto.png';

export const TextoHome = () => {
    return (
        <Container>
            <Poste>
                <ImagePost source={Texto} resizeMode="cover" />
            </Poste>
        </Container>
    );
}