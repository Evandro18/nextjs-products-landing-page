import { useContext } from "react"
import { bookmarksContext } from "../context/favorite-context";

export const useFavorite = (productId: number): boolean => {
  const { bookmarks } = useContext(bookmarksContext) ?? { bookmarks: []};
  return !!bookmarks?.get(`${productId}`);
}