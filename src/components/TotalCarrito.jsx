import React from 'react'
import { ContainerTotal, Total, TotalTitle } from '../styles/styles'

const TotalCarrito = ({total}) => {
  return (
    <ContainerTotal>
        <TotalTitle>Total</TotalTitle>
        <Total>$ {total.toFixed(2)} MXN</Total>
    </ContainerTotal>
  )
}

export default TotalCarrito