import ProductGridItems from '@/components/layout/ProductGridItems/ProductGridItems';
import styles from './page.module.css';
import products from '../products.json';
import { ProductInterface } from '@/utils/interfaces';

export default function Home({
  searchParams,
}: {
  searchParams: { searchTerm?: string };
}) {
  const searchTermParam = searchParams.searchTerm;
  const decodedSearchTerm = searchTermParam
    ? decodeURIComponent(searchTermParam)
    : '';
  const ProductList: ProductInterface[] =
    searchParams.searchTerm === undefined
      ? products
      : filterItems(products, decodedSearchTerm);

  return (
    <main className={styles.main}>
      {ProductList.length !== 0 ? (
        <ProductGridItems ProductList={ProductList} />
      ) : (
        <p>No results found for: &quot;{decodedSearchTerm}&quot;</p>
      )}
    </main>
  );
}
function filterItems(
  products: ProductInterface[],
  searchTerm: string
): ProductInterface[] {
  searchTerm = searchTerm.toLowerCase();
  return products.filter((products) => {
    return products.title
      .toLowerCase()
      .trim()
      .includes(searchTerm.toLowerCase().trim());
  });
}
