import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { CategoriesContext } from "../../contexts/categories.context";
import "./category.styles.scss";

import ProductCard from "../../components/product/product-card.component";

const Category = () => {
  const { category } = useParams();

  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <div className="category-container">
      {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
    </div>
  );
};

export default Category;
