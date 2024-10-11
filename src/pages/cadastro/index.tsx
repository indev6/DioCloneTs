import { Button } from '../../components/button/index';
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { Header } from "../../components/header";
import { Column, Container, CreateText, ForgetText, Row, SubTitleLogin, Title, TitleLogin, Wrapper } from "./styles";
import {Input} from '../../components/input';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { api } from '../../services/api';


const schema = yup.object({
    email: yup.string().email('email não é valido').required('campo obrigatorio'),
    password: yup.string().min(5, 'No minimo 5 caracteres').required('campo obrigatorio'),
}).required();


const Cadastro = () => {

    const navigate = useNavigate();

    const {control, handleSubmit, formState: {errors, isValid}} = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    console.log(isValid, errors);

    const onSubmit = async formData => {
        try{
            const {data} = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
            if(data.length === 1) {
                navigate('/feed')
            } else {
                alert('email ou senha invalido')
                console.log(data)
            }
        } catch{
            alert('Ocorreu um erro')
        }};

  return (<>
    <Header />
    <Container>
        <Column>
            <Title>
                A plataforma para você aprender com experts, dominar as principais tecnologias
                e entrar mais rápido nas empresas desejadas.
            </Title>
        </Column>
        <Column>
            <Wrapper>
                <TitleLogin>Comece agora grátis</TitleLogin>
                <SubTitleLogin>Crie sua conta e make the change._</SubTitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="name"   control={control} placeholder='Nome Completo' leftIcon={<MdPerson />} />
                        <Input name="email" erroMessage={errors?.email?.message} control={control}  placeholder='E-mail' leftIcon={<MdEmail />} />
                        <Input name="password" erroMessage={errors?.password?.message} control={control} placeholder='Senha' type="password" leftIcon={<MdLock />}/>
                        <Button title='Entrar' variant='secondary'  type="submit"/>
                </form>
                    <Row>
                        <ForgetText>Ao clicar em criar minha conta grátis, declaro que aceito as Políticas de Privacdade e os Termos de Uso da DIO.</ForgetText>
                        <CreateText>Já tenho conta. <a>Fazer Login</a></CreateText>
                    </Row>
            </Wrapper>
        </Column>
    </Container>
  </>)
}

export {Cadastro}
