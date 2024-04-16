import "./Product.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp"
import prod2 from "../../../assets/products/earbuds-prod-2.webp"
import prod3 from "../../../assets/products/earbuds-prod-3.webp"
import prod4 from "../../../assets/products/earbuds-prod-4.webp"
import prod5 from "../../../assets/products/earbuds-prod-5.webp"
const Product = () => {
  return (
    <div className="product-card">
      <div className="thumbnail">
        <img src={prod} alt="" />
      </div>
      <div className="prod-details">
        <span className="name">Product name</span>
        <span className="price">&#8377;499</span>
      </div>
    </div>
  );
};

export default Product;
