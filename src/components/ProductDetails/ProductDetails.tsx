import { useParams } from "react-router-dom";
import "./ProductDetails.scss";

const ProductDetails = () => {
  const { id } = useParams();
  return (
    <>
      <div>Product: {id}</div>
      <div className="product">
        <div className="card__image">
        <img
            className="card__image--responsive"
            src={'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d'}
            alt="Card description"
          />
        </div>
        <div>
          <div>Price : 200</div>
          <div> how are you?</div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
