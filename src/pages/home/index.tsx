//import {Link} from "react-router-dom";
import { Button } from '../../components/button/index';
//import { BrowserRouter as Router } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Header } from "../../components/header";
import { Container, TextContent, Title, TitleHighLight } from "./styles";
import info from '../../assets/info-dio.png'


const Home = () => {

    const navigate = useNavigate();

    const handleClickSigIn = () => {
        navigate('/login')
    }

    return (<>
        <Header />
        <Container>
            <div>
                <Title>
                    <TitleHighLight>
                    Implemente 
                    <br />
                    </TitleHighLight>
                    o seu futuro global agora!
                </Title>
                <TextContent>
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
                    desafio profissional, evoluindo em comunidade com os melhores experts.
                </TextContent>
                <Button title="Começar agora" variant="secondary" onClick={handleClickSigIn} />
            </div>
            <div>
                <img src={info} alt="Imagem Principal" height={'520px'} />
            </div>
        </Container>
       
    </>)
}

 export {Home}