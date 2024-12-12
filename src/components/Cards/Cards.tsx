import Card from "../Card/Card";
import { CardProps } from "../../types/Card.d";

const Cards = () => {
  return (
    <>
      <Card
        imageUrl={
          "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d"
        }
        imageDescription={"A nice meaning in description mentioned here"}
        price={800}
      />
    </>
  );
};

export default Cards;
