import { Button } from '../../components/button/index';
import { MdEmail, MdLock } from 'react-icons/md';
import { Header } from "../../components/header";
import { Column, Container, CreateText, ForgetText, Row, SubTitleLogin, Title, TitleLogin, Wrapper } from "./styles";
import {Input} from '../../components/input';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { api } from '../../services/api';
import { IFormData } from './types';


const schema = yup.object({
    email: yup.string().email('email não é valido').required('campo obrigatorio'),
    password: yup.string().min(5, 'No minimo 5 caracteres').required('campo obrigatorio'),
}).required();


const Login = () => {

    const navigate = useNavigate();

    const {control, handleSubmit, formState: {errors, isValid}} = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    console.log(isValid, errors);

    const onSubmit = async (formData: IFormData) => {
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
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="email" erroMessage={errors?.email?.message} control={control} placeholder='E-mail' leftIcon={<MdEmail />} />
                        <Input name="password" erroMessage={errors?.password?.message} control={control} placeholder='Senha' type="password" leftIcon={<MdLock />}/>
                        <Button title='Entrar' variant='secondary'  type="submit"/>
                    </form>
                    <Row>
                        <ForgetText>Esqueci minha senha</ForgetText>
                        <CreateText>Criar conta</CreateText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
       
    </>)
}

 export {Login}