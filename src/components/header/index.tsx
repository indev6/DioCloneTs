/* eslint-disable react/prop-types */

import { Button } from '../button';
import logo from '../../assets/logo-dio.png'

import {
    BuscarInputcontainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper,
} from './styles'
import { IHeader } from './types';

const Header = ({autenticado}: IHeader) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt='Logo da Dio' width={'8%'} />
                {autenticado ? (
                    <>
                        <BuscarInputcontainer>
                        <Input placeholder='Buscar...' />
                        </BuscarInputcontainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>
                ) : null}
            </Row>
            <Row>
                {autenticado ? (
                    <UserPicture src="https://avatars.githubusercontent.com/u/130708525?v=4" />
                ) : (
                    <>
                        <MenuRight href='#'>Home</MenuRight>
                        <Button title={"Entrar"} />
                        <Button title={"Cadastrar"} />
                    </>)}
            </Row>
        </Container>
    </Wrapper>
  )
}

export {Header};
