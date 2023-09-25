import { ChangeEvent, FormEvent, useTransition } from 'react';
import styles from './Search.module.css';

import { usePathname, useRouter } from 'next/navigation';

export default function Search() {
  const router = useRouter();
  const pathname = usePathname();
  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const [isPending, startTransition] = useTransition();

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (e.target.value) {
      const encodedSearchTerm = encodeURIComponent(e.target.value);
      searchParams.set('searchTerm', encodedSearchTerm);
    } else {
      searchParams.delete('searchTerm');
    }

    startTransition(() => {
      router.replace(`${pathname}?${searchParams.toString()}`);
    });
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="search"
        id="site-search"
        className={styles.siteSearch}
        name="search"
        aria-labelledby="Search Products"
        autoComplete="off"
        placeholder="SEARCH FOR AN ITEM, COLOR, COLLECTION..."
        onChange={handleOnChange}
        autoFocus={true}
      />
    </form>
  );
}
