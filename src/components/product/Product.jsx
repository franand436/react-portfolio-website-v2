import "./product.css";

const Product = ({ img, desc }) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle1" />
        <div className="p-circle2" />
        <div className="p-circle3" />
      </div>
      <div className="p-container">
        <img className="p-img" src={img} alt="Product" />
        <div className="pl-text">
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;