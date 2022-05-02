import { getCategories } from "../services/data";
const getCategory = async (categoryId) => {
  const categories = await getCategories();
  const category = categories.find((item) => item.id === categoryId);
  return category;
};
export default getCategory;
