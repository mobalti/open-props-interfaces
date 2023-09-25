'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import products from '../../../products.json';
import styles from './page.module.css';

export default function ProductPage({
  params,
}: {
  params: { handle: string };
}) {
  const product = products.find((product) => product.handle === params.handle);
  if (!product) return notFound();

  const { title, description, price, img_url } = product;
  return (
    <main className={styles.main}>
      <section className={styles.productDetailsSection}>
        <div className={styles.visual}>
          <figure>
            <picture>
              <source
                srcSet={`../../../images/${img_url}.avif`}
                type="image/avif"
              />
              <source
                srcSet={`../../../images/${img_url}.webp`}
                type="image/webp"
              />

              <Image
                height={578}
                width={384}
                src={`/../../../images/${img_url}.jpg`}
                alt={title}
              />
            </picture>
          </figure>
        </div>
        <div className={styles.productDetails}>
          <p>{description}</p>
          <div className={styles.price}>{price} USD</div>
          <button>ADD</button>
        </div>
      </section>
    </main>
  );
}
