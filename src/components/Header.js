import React from 'react'
// styled component
import styled from 'styled-components'

const Head= styled.div`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.secondary};
    color: ${props => props.theme.dark};
    
`



const Header = () => {
  return (
    <Head>
        <h1>Kasir</h1>
    </Head>
  )
}

export default Header