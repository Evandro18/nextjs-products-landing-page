import { createContext } from "react";
import { BookmarkContextResult } from "./types";

export const bookmarksContext = createContext<BookmarkContextResult>({ } as BookmarkContextResult);