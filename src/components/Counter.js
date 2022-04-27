import React from 'react'
import styled from 'styled-components'


const CounterStyle = styled.div `
    width: 1.5rem;
    background: ${props => props.theme.dark};
    color: #fff;
    height: 1.5rem;
    border-radius: 100x;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;



`

const Counter = ({tambah, kurangi}) => {
    if(tambah){

        return <CounterStyle onClick={tambah}>+</CounterStyle>
        
    } else {
        
        return <CounterStyle onClick={kurangi}>-</CounterStyle>
    }
}

export default Counter