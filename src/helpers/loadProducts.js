import { getCategories, getProductos } from "../services/data";

export const loadProducts = async (categoryName, setProducts) => {
  const categories = await getCategories();
    const category = categories.find((item) => item.name === categoryName);
    getProductos(category.id).then((results) => {
        setProducts(results);
    });
};
