//import {Link} from "react-router-dom";
//import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from "../../components/header";
import { Container, Column, Title, TitleHighLight } from "./styles";
import { Card } from '../../components/card';
import { UserInfo } from '../../components/userInfo';


const Feed = () => {
    return (<>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighLight># RANKING 5 TOP DA SEMANA</TitleHighLight>
                <UserInfo percentual={35} nome="Igor Neves" image="https://avatars.githubusercontent.com/u/130708525?v=4"/>
                <UserInfo percentual={80} nome="Igor Neves" image="https://avatars.githubusercontent.com/u/130708525?v=4"/>
                <UserInfo percentual={47} nome="Igor Neves" image="https://avatars.githubusercontent.com/u/130708525?v=4"/>
                <UserInfo percentual={5} nome="Igor Neves" image="https://avatars.githubusercontent.com/u/130708525?v=4"/>
                <UserInfo percentual={53} nome="Igor Neves" image="https://avatars.githubusercontent.com/u/130708525?v=4"/>
            </Column>
        </Container>
       
    </>)
}

 export {Feed}