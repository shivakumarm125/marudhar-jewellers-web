import Card from "../Card/Card";
import "./Cards.scss";

const Cards = () => {
  const cardDetails = [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d",
      imageTitle: "Wedding Design",
      imageDescription: "hey",
      price: 500,
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d",
      imageTitle: "Wedding Design 2",
      imageDescription: "hey",
      price: 500,
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d",
      imageTitle: "Wedding Design 3",
      imageDescription: "hey",
      price: 500,
    },
    {
      id: 4,
      imageUrl: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d",
      imageTitle: "Wedding Design 4",
      imageDescription: "hey",
      price: 500,
    },
  ];
  return (
    <>
      <div className="card-container">
        {cardDetails.map((item) => {
          return (
            <>
              <Card
                id={item.id}
                imageUrl={item.imageUrl}
                imageDescription={item.imageDescription}
                price={item.price}
                imageTitle={item.imageTitle}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
