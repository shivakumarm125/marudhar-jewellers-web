import { useParams } from "react-router-dom";
const ProductDetails = () => {
  const { id } = useParams();
  return <>Product: {id}</>;
};

export default ProductDetails;
