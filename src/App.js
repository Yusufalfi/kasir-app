
import React from 'react'
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import CartItem from './components/CartItem';
import { useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import * as theme from "./styled/theme"
import ListMenu from './components/ListMenu';
import CalculateBox from './components/CalculateBox';

const Container = styled.div`
  display: flex;
  width: 90vw;
  height: 92vh;
`
const MenuContainer = styled.div`
  width: 15%;
  padding: 0.5rem 0;
  padding-right: 0.5rem;


`
const ProductContainer = styled.div`

  width: 65%;
  height: 100%;
  background: ${ props =>props.theme.light};
  border-left: 1px solid #f7f7f7;
  border-right: 1px solid #f7f7f7;
  padding: 0.5rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;


`

// const Child = styled.div`
// display: flex;
// margin: 0.5rem;


  
 
// `
const CartContainer = styled.div`
  width: 20%;
  padding: 0.5rem;
`

const FlashIt = styled.p`
background: #B9F8D3;
color: black;
width: 100%;
height: 40px;
padding: 0.5rem;

`


const App = () => {
    // ambil objek produk dari redux
  const products = useSelector(state => state.product.products)
  // ambil cart dari redux
  const carts = useSelector(state => state.product.carts)
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container>
        <MenuContainer>
          <ListMenu/>
        </MenuContainer>
        <ProductContainer>
      
            {products.map(product => 

              <ProductCard key={product.id} item={product} />
              
            )}
         
          
        </ProductContainer>
        <CartContainer>
        <FlashIt>{carts ? `${carts.length} item in cart` : `0 item in cart `}</FlashIt>
            {carts.map(item => 
              <CartItem key={item.id} item={item}/>
            )}
          <CalculateBox />
        </CartContainer>
        
      </Container>
    </ThemeProvider>
  )
}

export default App


