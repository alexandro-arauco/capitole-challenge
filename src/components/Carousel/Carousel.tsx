import { useRef } from "react";
import "../Carousel/Carousel.scss";

interface CarouselProps {
  children: React.ReactNode;
  title: string;
}

const Carousel = ({ children, title }: CarouselProps) => {
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
    <>
      <h2 className="carousel__title">{title}</h2>
      <div className="carousel-container">
        <button className="carousel-btn left" onClick={() => scroll("left")}>
          {"<"}
        </button>
        <div className="carousel" ref={carouselRef}>
          {children}
        </div>
        <button className="carousel-btn right" onClick={() => scroll("right")}>
          {">"}
        </button>
      </div>
    </>
  );
};

export default Carousel;
