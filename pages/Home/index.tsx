import type { GetStaticPropsContext, GetStaticPropsResult, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { CardProduct } from '../../components/card-product'
import { BookmarksContextProvider } from '../../context/bookmarks-context-provider'
import styles from '../../styles/Home.module.css'
import { ProductsResult } from '../../types/product'
import { products } from '../api/products'

function Home (props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { products } = props;

  return (
    <BookmarksContextProvider>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <div className={styles.grid}>
            {products?.map((product, index) => <CardProduct key={index} {...product} />)}
          </div>
        </main>
      </div>
    </BookmarksContextProvider>
  )
}

export async function getStaticProps (context: GetStaticPropsContext): Promise<GetStaticPropsResult<ProductsResult>> {
  return {
    props: {
      products
    },
    revalidate: 30
  }
}

export default Home
