import React from 'react'
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: #f2f2f2;
    color: #333;
    padding: 10px 20px;
    border: none;
    borderradius : 4px;
    font-size: 16px;
    cursor: pointer;
    
    &:hover {
        background-color: #ddd;
    }
`

const BotonStyled = () => {
  return (
   <StyledButton> StyledButton</StyledButton>
  )
}

export default BotonStyled