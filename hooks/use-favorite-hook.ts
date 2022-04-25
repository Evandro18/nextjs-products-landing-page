import { useContext } from "react"
import { bookmarksContext } from "../context/favorite-context";
import { Product } from "../types/product";

export const useFavorite = (productId: number): boolean => {
  const { bookmarks } = useContext(bookmarksContext) ?? { bookmarks: []};
  return !!bookmarks?.get(`${productId}`);
}