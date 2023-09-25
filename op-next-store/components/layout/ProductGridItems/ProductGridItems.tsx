import Image from 'next/image';
import React from 'react';
import styles from './ProductGridItems.module.css';

import { ProductInterface } from '@/utils/interfaces';
interface ProductGridItemProps {
  ProductList: ProductInterface[];
}

import Link from 'next/link';

export default function ProductGridItems({
  ProductList,
}: ProductGridItemProps) {
  return (
    <section className={styles.section}>
      <header>
        <p>YOU MIGHT BE INTERESTED IN</p>
      </header>
      <ul className={styles.products}>
        {ProductList.map((product) => {
          const { id, handle, title, price, img_url } = product;

          return (
            <li key={id} className={styles.card}>
              <Link href={`/product/${handle}`}>
                <figure>
                  <picture>
                    <source
                      srcSet={`../../../../images/${img_url}.avif`}
                      type="image/avif"
                    />
                    <source
                      srcSet={`../../../../images/${img_url}.webp`}
                      type="image/webp"
                    />

                    <Image
                      height={578}
                      width={384}
                      src={`/../../../../images/${img_url}.jpg`}
                      alt={title}
                    />
                  </picture>
                  <figcaption>
                    <div>{title}</div>
                    <div>{price} USD</div>
                  </figcaption>
                </figure>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
