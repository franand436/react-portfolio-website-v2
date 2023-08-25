import "./productList.css";
import Product from "../product/Product"

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Achievments and Acomplishments.</h1>
          <p className="pl-desc">
            Here is a list of my achievments and acomplishments in the tech
            world.
          </p>
      </div>
      <div className="pl-list">
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </div>
    </div>
  );
};

export default ProductList;
