import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ProductListing.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import { fetchProducts } from "../../redux/products/ProductActions";

const ProductListing = () => {
  // TRADITIONAL APPROACH WITHOUT REDUX:
  //   const url = "https://sabka-bazaar-apis.herokuapp.com";
  //   const [products, setProducts] = useState(null);
  //   const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     getProducts();
  //     setLoading(false);
  //   }, []);

  //   const getProducts = async () => {
  //     const rawData = await fetch(`${url}/products`);
  //     const data = await rawData.json();
  //     setProducts(data);
  //   };

  // WITH REDUX:
  const { data: products, loading } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      <h1>Products:</h1>
      <div className="product-list">
        {loading ? (
          <div>Products Loading...</div>
        ) : (
          products &&
          products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.name}
              description={product.description}
              price={product.price}
            ></ProductCard>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductListing;
