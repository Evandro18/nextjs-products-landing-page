import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import Favorite from "./types";

export const Favorite = (props: Favorite) => {
  if (props.isFavorite) return <MdFavorite fontSize={36} onClick={(ev) => props.handleFavorite(ev, props.isFavorite)} />
  return (
    <MdFavoriteBorder fontSize={36} onClick={(ev) => props.handleFavorite(ev, props.isFavorite)} />
  )
}