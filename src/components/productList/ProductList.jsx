import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
      <h1 className="pl-title">Achievments and Accomplishments.</h1>
          <p className="pl-desc">
            Here is a list of my achievments and accomplishments in tech. <br /><br />(Hover the mouse cursor over one of the tiles for more information🙂.)
          </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} desc={item.desc} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;