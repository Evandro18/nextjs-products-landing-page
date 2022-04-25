import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import { CardProduct } from "../../components/card-product"
import { BookmarksContextProvider } from "../../context/bookmarks-context-provider";
import { Product } from "../../types/product";
import { products } from "../api/products";

type ProductPageProps = {
  product: Product;
}

import styles from '../../styles/Home.module.css'

const ProductPage = ({ product }: ProductPageProps) => {

  if (!product) return <span>Nothing to see here!</span>
  return (
    <BookmarksContextProvider>
      <main className={styles.main}>
        <section className={styles.details}>
          <CardProduct  {...product} />
        </section>
      </main>
    </BookmarksContextProvider>
  )
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const { id } = context.params ?? {};
  if (!id) return { props: { product: null } };

  const product = products.find(product => product.id.toString() === id);

  return {
    props: {
      product
    },
    revalidate: 30
  }

}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = products.map((post) => ({
    params: { id: `${post.id}` },
  }))

  return { paths, fallback: 'blocking' }
}

export default ProductPage