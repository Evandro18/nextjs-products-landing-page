import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import Favorite from "./types";
import favoriteStyles from './favorite.module.css';

export const Favorite = (props: Favorite) => {
  if (props.isFavorite) return <MdFavorite className={favoriteStyles.favoriteIcon} fontSize={36} onClick={(ev) => props.handleFavorite(ev, props.isFavorite)} />
  return (
    <MdFavoriteBorder className={favoriteStyles.favoriteIcon} fontSize={36} onClick={(ev) => props.handleFavorite(ev, props.isFavorite)} />
  )
}