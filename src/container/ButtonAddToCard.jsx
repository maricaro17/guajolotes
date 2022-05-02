import React from 'react'
import { AddToCardSpan, ContainerButtonAddToCard } from '../styles/styles'

const ButtonAddToCard = ({count, price}) => {
  const total = price*count
  return (
    <div>
    <ContainerButtonAddToCard>
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