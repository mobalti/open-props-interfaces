'use client';

import Image from 'next/image';
import styles from './Navbar.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Search from '@/components/Search/Search';

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <nav className={styles.navbar}>
      <header>
        <Link href={'/'} className={styles.logo}>
          <Image
            src={'/../../../../images/next-store-logo.svg'}
            width={546}
            height={115}
            alt="Next store logo"
          />
        </Link>
        <Link href="/">SHOPPING BAG (0)</Link>
      </header>
      {isHome && <Search />}
    </nav>
  );
}
