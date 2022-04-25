export type BookmarkContextResult = {
  bookmarks: Map<string, Product>,
  setBookmark: (product: Product) => void;
  removeBookmark: (product: Product) => void;
}