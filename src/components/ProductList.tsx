import products from "../data/products.json";
import ProductItem from "./ProductItem";

export default () => (
  <div className="products">
    {
      products.map((product: any) => (
        <ProductItem product={product} />
      ))
    }
  </div>
);
