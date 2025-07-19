import React, { useRef } from "react";
import "../styles/Carousel.scss";

interface CarouselProps {
  children: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="carousel-container">
      <button className="carousel-btn left" onClick={() => scroll("left")}>{"<"}</button>
      <div className="carousel" ref={carouselRef}>
        {children}
      </div>
      <button className="carousel-btn right" onClick={() => scroll("right")}>{">"}</button>
    </div>
  );
};

export default Carousel;
