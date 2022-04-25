import styles from '../../styles/Home.module.css'
import { Product } from '../../types/product'
import Image from 'next/image'
import cardStyles from './card-product.module.css'
import { toBRLCurrency } from '../../utils/currency-formatter'
import { Favorite } from '../favorite'
import { useFavorite } from '../../hooks/use-favorite-hook'
import React, { MouseEvent, useContext } from 'react'
import { bookmarksContext } from '../../context/favorite-context'
import { useRouter } from 'next/router'

export const CardProduct = (product: Product) => {
  const router = useRouter()
  const isFavorite = useFavorite(product.id);
  const price = toBRLCurrency(product.salePrice);
  const { setBookmark, removeBookmark } = useContext(bookmarksContext);

  const handleFavorite = (newFavorite: Product) => (event: MouseEvent<SVGElement>, unlike: boolean) => {
    event.stopPropagation();
    if (unlike) return removeBookmark(newFavorite);
    setBookmark(newFavorite);
  }

  const handleOpenProduct = (event: MouseEvent<HTMLElement>): void => {
    router.push(`/Home/${product.id}`);
  }

  return (
    <div className={styles.card} onClick={handleOpenProduct}>
      <header>
        <span hidden>{product.id}</span>
        <span>{product.name}</span>
      </header>
      <Image src={`/${product.imageURL}`} alt='product image' width={250} height={200}/>
      <section className={cardStyles.cardFooter}>
        <span>Price: {price}</span>
        <br/>
        <Favorite isFavorite={isFavorite} handleFavorite={handleFavorite(product)} />
      </section>
    </div>
  )
}