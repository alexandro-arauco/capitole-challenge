import type { FilmDetail } from "@/interfaces/Film";

const WISHLIST_KEY = "film-browser-wishlist";

type WishlistItem = Pick<FilmDetail, "id" | "title" | "poster_path">;

export const wishlistService = {
  getWishlist(): WishlistItem[] {
    try {
      if (typeof window === "undefined") {
        return [];
      }
      const saved = localStorage.getItem(WISHLIST_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Error loading wishlist:", error);
      return [];
    }
  },

  addToWishlist(movie: WishlistItem): void {
    try {
      const wishlist = this.getWishlist();
      const exists = wishlist.find((item) => item.id === movie.id);

      if (!exists) {
        const newItem: WishlistItem = {
          id: movie.id,
          title: movie.title,
          poster_path: movie.poster_path,
        };

        wishlist.push(newItem);
        localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
      }
    } catch (error) {
      console.error("Error adding to wishlist:", error);
    }
  },

  removeFromWishlist(movieId: number): void {
    try {
      if (typeof window === "undefined") {
        return;
      }
      
      const wishlist = this.getWishlist();
      const filtered = wishlist.filter((item) => item.id !== movieId);
      localStorage.setItem(WISHLIST_KEY, JSON.stringify(filtered));
    } catch (error) {
      console.error("Error removing from wishlist:", error);
    }
  },

  isInWishlist(movieId: number): boolean {
    try {
      const wishlist = this.getWishlist();
      return wishlist.some((item) => item.id === movieId);
    } catch (error) {
      console.error("Error checking wishlist:", error);
      return false;
    }
  },
};
