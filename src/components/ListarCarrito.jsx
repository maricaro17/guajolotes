import React, { useEffect } from 'react'
import CardCarrito from './CardCarrito'


const ListarCarrito = ({calcularTotal}) => {
    const carrito = localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : []
    
    useEffect(() => {
        calcularTotal(carrito)
    }, [])
    
  return (
    <div>
        {carrito.map((item)=>(
            <CardCarrito key={item.id} item={item}/>
        ))}
            
    </div>
  )
}

export default ListarCarrito