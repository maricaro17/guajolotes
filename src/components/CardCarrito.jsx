import React from 'react'
import { CardContainer, CardDetails, CardItemName, CardItemPrice } from '../styles/styles'

const CardCarrito = ({item}) => {
  return (
      <>
    <CardContainer backgroundColor="transparent">
    <div>
        <img src={item.image} alt={item.name} />
      </div>
      <CardDetails justifyContent="space-between" width="100%" flexDirection="row">
        <CardItemName>{item.name}</CardItemName>
        <CardItemPrice>${item.total} MXN</CardItemPrice>
      </CardDetails>
    </CardContainer>
    </>
  )
}

export default CardCarrito