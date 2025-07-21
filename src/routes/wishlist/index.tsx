import { wishlistService } from "../../services/wishlist";
import { createFileRoute, Link, useLoaderData } from "@tanstack/react-router";
import { useState } from "react";
import "../../styles/Wishlist.scss";
import { toast } from "sonner";
import { Card } from "../../components/Card";

export const Route = createFileRoute("/wishlist/")({
  component: RouteComponent,
  loader: () => wishlistService.getWishlist(),
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
          <Card key={item.id} title="">
            <div className="wishlist-card-content">
              <Link to="/detail/$id" params={{ id: item.id.toString() }}>
                <img
                  className="wishlist-card-img"
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  alt={item.title}
                />
              </Link>
              <button
                className="wishlist-remove-btn"
                onClick={() => handleRemove(item.id)}
              >
                Remove from Wishlist
              </button>
            </div>
          </Card>
        ))}
    </div>
  );
}
