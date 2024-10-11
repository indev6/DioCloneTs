/* eslint-disable react/prop-types */
import { IconContainer, InputContainer, ErrorText, InputText } from "./styles";
import { Controller } from "react-hook-form";
import { IInput } from "./types";

const Input = ({leftIcon, name, control, erroMessage, ...rest}: IInput) => {
  return (
    <>
    <InputContainer>
        {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
        <Controller 
        name={name}
        control={control}
        rules={{required: true}}
        render={({field: {value, onChange}}) => 
        <InputText value={value} onChange={onChange} {...rest} />}
        />
    </InputContainer>
    {erroMessage ? <ErrorText>{erroMessage}</ErrorText> : null}
    </>
  )
}

export {Input};