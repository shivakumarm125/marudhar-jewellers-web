import { CardProps } from "../../types/Card.d";
import "./Card.scss";

const Card = (props: CardProps) => {
  // const { imageUrl } = props.imageUrl;
  return (
    <>
      <div className="card">
        <div className="card__image">
          <img
            className="card__image--responsive"
            src={props.imageUrl}
            alt="Card description"
          />
        </div>
        <div className="card__description">
          <div className="card__description--price">{props.price}</div>
          <div className="card__description--story">
            {props.imageDescription}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
