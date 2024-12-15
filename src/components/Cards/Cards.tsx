import Card from "../Card/Card";
import "./Cards.scss";

const Cards = () => {
  return (
    <>
      <div className="card-container">
        <Card
          imageUrl={
            "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d"
          }
          imageDescription={"A nice meaning in description mentioned here"}
          price={800}
        />
        <Card
          imageUrl={
            "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d"
          }
          imageDescription={"A nice meaning in description mentioned here"}
          price={800}
        />
        <Card
          imageUrl={
            "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d"
          }
          imageDescription={"A nice meaning in description mentioned here"}
          price={800}
        />
      </div>
    </>
  );
};

export default Cards;
