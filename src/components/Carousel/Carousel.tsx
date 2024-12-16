import { useEffect, useState } from "react";
import "./Carousel.scss";
import image1 from "../../media/images/image1.jpg";
import image2 from "../../media/images/image2.jpg";

const Carousel = () => {
  const carouselDetails = [
    {
      index: 0,
      imageUrl: image1,
      imageTitle: "Wedding Design",
      imageDescription: "hey",
      price: 500,
    },
    {
      index: 1,
      imageUrl: image2,
      imageTitle: "Wedding Design 2",
      imageDescription: "hey",
      price: 500,
    },
  ];

  const [currentImage, setCurrentImage] = useState(carouselDetails[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage(); // Automatically go to the next image
    }, 10000);
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % carouselDetails.length; // Cycle forward
      setCurrentImage(carouselDetails[newIndex]);
      return newIndex;
    });
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex =
        (prevIndex - 1 + carouselDetails.length) % carouselDetails.length; // Cycle backward
      setCurrentImage(carouselDetails[newIndex]);
      return newIndex;
    });
  };

  return (
    <>
      <div className="carousel-container">
        <div className="carousel-image">
          <img src={currentImage.imageUrl} alt={currentImage.imageTitle} />
        </div>
        <div className="carousel-controls">
          {/* Add Previous and Next Buttons */}
          <button onClick={prevImage} className="carousel-button prev">
            Previous
          </button>
          <button onClick={nextImage} className="carousel-button next">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
