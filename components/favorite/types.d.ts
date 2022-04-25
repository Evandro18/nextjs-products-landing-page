import { MouseEvent } from "react";

export type Favorite = {
  isFavorite: boolean;
  handleFavorite: (ev: MouseEvent<SVGElement>, unlike: boolean) => void;
}

export default Favorite;