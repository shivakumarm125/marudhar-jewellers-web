import { useParams } from "react-router-dom";
import "./ProductDetails.scss";
import { useState } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const images = [
    "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    "https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    // "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <>
      <div>Product: {id}</div>
      <div className="product">
        <div className="card__image">
          <div className="card__image--multiple">
            <div className="card__image--multiple-single">
              {images.map((image) => {
                return (
                  <div
                    className="card__image--multiple-single-main"
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      className="card__image--responsive"
                      src={image}
                      alt="Card description"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="card__image--main">
            <img
              className="card__image--responsive"
              src={selectedImage}
              alt="Card description"
            />
          </div>
          <div>
            <div>Price : 200</div>
            <div> how are you?</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
