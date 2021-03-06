import React from 'react'
import Button from "./Button"
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { resetCart } from '../store/action/productAction'
import { useState } from 'react'




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
    // dispatch
    const dispatch = useDispatch()
    const carts = useSelector(state => state.product.carts )
    // total semua yg di cart
    const total =carts.reduce((totalPrice, current ) => totalPrice + current.price, 0)
    // pembeyaran
    const [pay, setPay] = useState("")
    // kembalian
    const [change , setChange] = useState("")
    // handleChange input
    const handleChange = e => {
        setPay(e.target.value)
    }

    //method kembalian
    const calculateChange = () => {
        // pengurangan total dan pay
        if(pay > total) {
         setChange(pay- total)   
        }
    }  
    // method resetCart
    const reset = () => {
        dispatch(resetCart())
        setChange("")
        setPay("")
    }

  return (
    <Box>
        <Total>
            <h4>Total</h4>
            <p>{total}</p>
        </Total>
        <Pay>
            <p>jml</p>
            
            <input type="number"
                    value={pay} 
                    onChange={handleChange}
                    placeholder='masukan uang pembayaran' />
        </Pay>
        <Change>
            <h4>Kembalian</h4>
            <p>{change}</p>
        </Change>
        <BtnBox>
            <Button text="reset" action={reset} />
            <Button primary action={calculateChange} text="selesai" />
        </BtnBox>
    </Box>
  )
}

export default CalculateBox