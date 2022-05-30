import { GetServerSideProps, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { SubScribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';
import styles from './home.module.scss';


interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }

}
export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>igNews</title>
      </Head>

      <main className={styles.headerContainer}>
        <section className={styles.hero}>
          <span>👏 hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>

          <p>
            bet access to all the publications <br />
            <span>for $ {product.amount} month</span>
          </p>

          <SubScribeButton priceId={product.priceId} />
        </section>

        <Image src='/images/mulher.svg' alt='logo' width={300} height={521} />
      </main>
    </>

  )
}

// export const getServerSideProps: GetServerSideProps = async () => {

//   const price = await stripe.prices.retrieve('price_1L5EbOEQy0GRgyRNrAsxLyCX', {
//     expand: ['product']
//   });

//   const product = {
//     priceId: price.id,
//     amount: price.unit_amount / 100,
//   }

//   return {
//     props: {
//       product
//     }
//   }
// }

export const getStaticProps: GetStaticProps = async () => {

  const price = await stripe.prices.retrieve('price_1L5EbOEQy0GRgyRNrAsxLyCX', {
    expand: ['product']
  });

  const product = {
    priceId: price.id,
    amount: price.unit_amount / 100,
  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 26
  }
}
