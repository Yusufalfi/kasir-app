import React, { useState } from 'react'
import styled from 'styled-components'
import Counter from "./Counter"
import { tambah, kurangi } from '../store/action/productAction'
import { useDispatch } from 'react-redux'

const Cart = styled.div`
    display: flex;
    width: 95%;
    justify-content: space-between;
    align-items: center;
    height: 3rem;
    padding: 0 0.3rem;
    margin: 0.5rem auto;
    background: #fff;
    box-shadow: 1px 1px 10px 1px #777;

`
const CounterContainer = styled.div`
    display: flex;
    width: 30%;
    text-align: center;
`

const ItemName = styled.div`
    width: 40%;
    padding-left: 0.5rem;
`

const Price = styled.div`
    width: 30%;
    text-align: center;
`

const CounterTotal = styled.div`
    margin: 0 0.3rem;
`

const CartItem = ({item}) => {
    // state
  const [count , setCount] = useState(0)
    const Dispatch = useDispatch()

//   method increment/tambah
    const increment = id => {
        setCount(count + 1)
        Dispatch(tambah(id))
    }
    //   method decrement/kurang
    const decrement = id => {
        
        setCount(count - 1)
        Dispatch(kurangi(id))
        // if(count === 0) {
        // }
    }
  return (
    <Cart>
    <ItemName>{item.name}</ItemName>
        <CounterContainer>
            <Counter tambah={() => increment(item.id) }/>
                <CounterTotal>{count}</CounterTotal>
            <Counter kurangi={() => decrement(item.id) }/>
        </CounterContainer>
        <Price>
        {item.price}
        </Price>
    </Cart>
  )
}

export default CartItem