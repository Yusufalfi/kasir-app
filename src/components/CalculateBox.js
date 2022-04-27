import React from 'react'
import Button from "./Button"
import styled from 'styled-components'



const Box = styled.div`
position: fixed;
bottom: 0;
width: 20rem;
height: 10rem;
box-shadow: 1px 1px 10px 1px #777;
padding: 0.4rem;
margin-left: -0.4rem;
margin-bottom: 10px;




`
const Total = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 0.4rem;

`
const Pay = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 0.4rem;
input[type=number] {
    border: none;
    border-bottom: 1px solid #000;
    font-weight: bold;
    text-align: right;
    &:focus {
        outline: none;
    }
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button{
        -webkit-appearance: none;
    }
}


`
const Change = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 0.7rem;

`
const BtnBox = styled.div`
display: flex;
justify-content: space-between;



`



const CalculateBox = () => {
  return (
    <Box>
        <Total>
            <h4>Total</h4>
            <p>2300</p>
        </Total>
        <Pay>
            <p>jml</p>
            <input type="number" />
        </Pay>
        <Change>
            <h4>Kembalian</h4>
            <p>2300</p>
        </Change>
        <BtnBox>
            <Button />
            <Button primary />
        </BtnBox>
    </Box>
  )
}

export default CalculateBox