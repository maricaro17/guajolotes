import React from 'react'
import { AddToCardSpan, ContainerButtonAddToCard } from '../styles/styles'

const ButtonAddToCard = ({count, price, addToCar, item}) => {
  const total = price*count
  return (
    <div>
    <ContainerButtonAddToCard onClick={(e)=>addToCar(e,item)}>
      <span>
      {`Agregar ${count} al carrito` }
      </span>
      <AddToCardSpan>
      {`$${total.toFixed(2)}`}
      </AddToCardSpan>
    </ContainerButtonAddToCard>
    </div>
  )
}

export default ButtonAddToCard