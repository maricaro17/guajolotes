export const addToCar = (data)=>{
    localStorage.setItem("carrito", JSON.stringify(data))
}