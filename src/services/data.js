import axios from "axios";

const url = "https://guappjolotes-api.herokuapp.com";

export const getProductos = async (categoryId) => {
  const result = await axios.get(`${url}/productos?categoryId=${categoryId}`);
  if (result.status === 200) {
    return result.data;
  }
};
export const getCategories = async () => {
  const result = await axios.get(`${url}/categories`);
  if (result.status === 200) {
    return result.data;
  }
};
