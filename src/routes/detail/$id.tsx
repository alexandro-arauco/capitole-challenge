import { createFileRoute, useLoaderData } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { wishlistService } from "../../services/wishlist";
import "../../styles/FilmItem.scss";
import { fetchFilmDetail } from "../../utils/fetchFilmDetail";

export const Route = createFileRoute("/detail/$id")({
  component: RouteComponent,
  loader: ({ params }) => fetchFilmDetail(Number(params.id)),
});

function RouteComponent() {
  const response = useLoaderData({ from: "/detail/$id" });
  const [isInWishlist, setIsInWishlist] = useState(
    wishlistService.isInWishlist(response.id)
  );

  const handleAddToWishlist = () => {
    wishlistService.addToWishlist({
      id: response.id,
      title: response.title,
      poster_path: response.poster_path,
    });
    setIsInWishlist(true);
    toast.success("Film added to Wishlist", {
      position: "top-right",
    });
  };

  const handleRemoveFromWishlist = () => {
    wishlistService.removeFromWishlist(response.id);
    setIsInWishlist(false);
    toast.success("Film removed from Wishlist", {
      position: "top-right",
    });
  };

  return (
    <div className={`detail-container genre-${response.genres[0]?.name.toLowerCase().replace(/\s/g, '-')}`}>
      <div className="detail-image-section">
        <img
          className="detail-image"
          src={`https://image.tmdb.org/t/p/w500/${response.backdrop_path}.jpg`}
          alt={response.title}
        />
        <h2 className="detail-title">{response.title}</h2>
      </div>
      <div className="detail-main-content">
        <button
          className="wishlist-btn fluent-btn"
          onClick={() => {
            isInWishlist ? handleRemoveFromWishlist() : handleAddToWishlist();
          }}
        >
          {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
        </button>
        <div className="detail-info">
          <p className="detail-overview">{response.overview}</p>
          <p className="detail-release">
            Release Date: {response.release_date.toString()}
          </p>
          <p className="detail-rating">Rating: {response.vote_average}</p>
          <p className="detail-genres">
            Genres: {response.genres.map((g) => g.name).join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
}
