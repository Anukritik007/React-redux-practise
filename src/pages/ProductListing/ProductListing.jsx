import React, { useState, useEffect } from "react";
import "./ProductListing.css";
import ProductCard from "../../components/ProductCard/ProductCard";

const ProductListing = () => {
  const url = "https://sabka-bazaar-apis.herokuapp.com";
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const rawData = await fetch(`${url}/products`);
    const data = await rawData.json();
    setProducts(data);
  };

  return (
    <div>
      <h1>Products:</h1>
      <div className="product-list">
        {products &&
          products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.name}
              description={product.description}
              price={product.price}
            ></ProductCard>
          ))}
      </div>
    </div>
  );
};

export default ProductListing;
