import { ReactNode, useCallback, useEffect, useState } from "react";
import { Product } from "../types/product";
import { bookmarksContext } from "./favorite-context";

type BookmarksContextProviderProps = {
  children: ReactNode;
}

export const BookmarksContextProvider = (props: BookmarksContextProviderProps) => {
  const [bookmarks, setBookmarks] = useState<Map<string, Product>>(new Map()) ?? []; 

  const setBookmark = useCallback((product: Product) => {
    setBookmarks(old => {
      return new Map([...old.entries(), [`${product.id}`, product]])
    });
  }, [setBookmarks]);

  const removeBookmark = useCallback((product: Product) => {
    setBookmarks(old => {
      const copy = new Map([...old.entries()]);
      copy.delete(product.id.toString());
      return copy;
    });
  }, [setBookmarks]);

  return <bookmarksContext.Provider value={{ bookmarks, setBookmark, removeBookmark }}>
    {props.children}
  </bookmarksContext.Provider>
}