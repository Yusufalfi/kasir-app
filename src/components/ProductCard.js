import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { addCart } from '../store/action/productAction'

const Card = styled.div`
    width: 20%;
    height: 15rem;
    cursor: pointer;
    margin-right: 0.5rem;
`
const CardImg = styled.img`
    width: 100%;
    height: 100%;
`
const NamePrice = styled.div`
    display: flex;
    justify-content: space-between;
`

const ProductCard = ({item}) => {
    // destruct dispatctnya
    const Dispatch = useDispatch()

    // method add to cart
    const addToCart = id=> {
        console.log(id)
      Dispatch(addCart(id))
    }

  return (
    <Card onClick={() => addToCart(item.id)}>
       <CardImg src={item.image} alt={item.name} />
        <NamePrice>
            <p>{item.name}</p>
            <p>{item.price}</p>
        </NamePrice>
       
    </Card>
  )
}

export default ProductCard