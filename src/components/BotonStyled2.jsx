import React from 'react'
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: ${props => props.primary ? 'blue' : 'gray'};
    color: white;
    padding: 10px 20px;
    border: none;
    borderradius : 4px;
    font-size: 16px;
    cursor: pointer;
    
    &:hover {
        background-color: ${props=> props.primary ? 'darkblue' : 'darkgray'};
    }
`;

const BotonStyled2 = () => {
  return (
    <div>
        <h1>Styled Components en React</h1>
        <StyledButton primary>Primery Button</StyledButton>
        <StyledButton>Secondary Button</StyledButton>
    </div>
  )
}

export default BotonStyled2