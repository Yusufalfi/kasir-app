import React from 'react'
import styled from 'styled-components'



const MyButton = styled.button`
    height: 1.8rem;
    width: 4rem;
    border: none;
    padding: 0.2rem 0.5rem;
    color: #777;
    text-align: center;
    margin-left: 2px;
    cursor: pointer;
    &:focus {
        outline: none;
    }
`

const PrimaryButton = styled(MyButton)`
    background: ${props => props.theme.primary};
    color: #000;
`

const WarningButton = styled(MyButton)`
    background: ${props => props.theme.tertiary};
    color: #000;
`

const Button = ({primary,action, text}) => {
    if(primary) {
        
        return <PrimaryButton onClick={action}>{text}</PrimaryButton>
    } else {
        return <WarningButton onClick={action}>{text}</WarningButton>
    }
}

export default Button