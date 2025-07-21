import { createFileRoute, useLoaderData } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Card } from "../../components/Card";
import { wishlistService } from "../../services/wishlist";
import "../../styles/Detail.scss";
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

  return (
    <div className="detail-container">
      <Card title={response.title}>
        <div className="detail-content">
          <img
            className="detail-image"
            src={`https://image.tmdb.org/t/p/w500/${response.backdrop_path}.jpg`}
            alt={response.title}
          />
          <div className="detail-info-wrapper">
            <div className="detail-info">
              <p>{response.overview}</p>
              {isInWishlist ? (
                <button
                  className="wishlist-btn"
                  onClick={() => {
                    wishlistService.removeFromWishlist(response.id);
                    setIsInWishlist(false);
                    toast.success("Film removed from Wishlist", {
                      position: "top-right",
                    });
                  }}
                >
                  Remove from Wishlist
                </button>
              ) : (
                <button
                  className="wishlist-btn"
                  onClick={() => {
                    wishlistService.addToWishlist({
                      id: response.id,
                      title: response.title,
                      poster_path: response.poster_path,
                    });
                    setIsInWishlist(true);
                    toast.success("Film added to Wishlist", {
                      position: "top-right",
                    });
                  }}
                >
                  Add to Wishlist
                </button>
              )}
            </div>
          </div>
        </div>
        <p className="detail-release">
          Release Date: {response.release_date.toString()}
        </p>
        <p className="detail-rating">Rating: {response.vote_average}</p>
        <p className="detail-genres">
          Genres: {response.genres.map((g) => g.name).join(", ")}
        </p>
      </Card>
    </div>
  );
}
