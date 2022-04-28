import { getCategories, getProductos } from "../services/data";

export const loadProducts = (categoryName, setProducts) => {
  getCategories().then((categories) => {
    const category = categories.find((item) => item.name === categoryName);
    getProductos(category.id).then((results) => {
      setProducts(results);
    });
  });
};
