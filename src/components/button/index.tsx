/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from 'react';
import {ButtonContainer} from './styled';
import {IButton} from './types';



const Button = ({title, variant="primary", onClick}: IButton) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>
      {title}
    </ButtonContainer>
  )
}

export {Button}
