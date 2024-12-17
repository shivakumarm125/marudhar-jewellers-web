import { CardProps } from "../../types/Card.d";
import "./Card.scss";
import { useNavigate } from "react-router-dom";


const Card = (props: CardProps) => {
  const { imageUrl, width, height, price, imageDescription, imageTitle } = props;
  const navigate = useNavigate();

  const navigateToProductDetails = () => {
    navigate("/product");
  };
  
  return (
    <>
      <div className="card" style={{width: width || "15rem", height: height || "25rem"}} onClick={navigateToProductDetails}>
        <div className="card__image">
          <img
            className="card__image--responsive"
            src={imageUrl}
            alt="Card description"
          />
        </div>
        <div className="card__description">
          <div className="card__description--title">{imageTitle}</div>
          <div className="card__description--price">{price}</div>
          <div className="card__description--story">
            {imageDescription}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
