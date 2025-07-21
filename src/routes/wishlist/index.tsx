import { createFileRoute, Link, useLoaderData } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Card } from "../../components/Card";
import { wishlistService } from "../../services/wishlist";
import "../../styles/FilmItem.scss";

export const Route = createFileRoute("/wishlist/")({
  component: RouteComponent,
  loader: () => wishlistService.getWishlist(),
  ssr: false,
});

function RouteComponent() {
  const initialWishlist = useLoaderData({ from: "/wishlist/" });
  const [wishList, setWishList] = useState(initialWishlist);

  const handleRemove = async (id: number) => {
    await wishlistService.removeFromWishlist(id);
    setWishList((prev) => prev.filter((item) => item.id !== id));
    toast.success("Film removed from Wishlist", { position: "top-right" });
  };

  return (
    <div className="wishlist-grid">
      {wishList &&
        wishList.map((item) => (
          <Card key={item.id} title={item.title}>
            <div className="wishlist-img-btn-group">
              <Link to="/detail/$id" params={{ id: item.id.toString() }}>
                <img
                  className="wishlist-card-img"
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  alt={item.title}
                />
              </Link>
              <div className="wishlist-card-actions">
                <button
                  className="wishlist-remove-btn fluent-btn"
                  onClick={() => handleRemove(item.id)}
                >
                  <span className="fluent-btn-text">Remove from Wishlist</span>
                </button>
              </div>
            </div>
          </Card>
        ))}
    </div>
  );
}
