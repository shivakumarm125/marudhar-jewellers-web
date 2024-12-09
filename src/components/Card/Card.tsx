import "./Card.scss";

const Card = () => {
  return (
    <>
      <div className="card">
        <div className="card__image">
          <img 
            className="card__image--responsive" 
            src="https://images.unsplash.com/photo-1417325384643-aac51acc9e5d" 
            alt="Card description"
          />
        </div>
        <div className="card__description">
          <div className="card__description--price">700</div>
          <div className="card__description--story">
            A nice meaning in description mentioned here
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
