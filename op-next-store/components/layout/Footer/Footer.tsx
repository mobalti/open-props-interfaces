import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <dl>
        <div>
          <dt>Follow Us</dt>
          <dd>
            <a href="#">NEWSLETTER</a>
          </dd>
          <dd>
            <a href="#">TIKTOK</a>
          </dd>
          <dd>
            <a href="#">INSTAGRAM</a>
          </dd>

          <dd>
            <a href="#">FACEBOOK</a>
          </dd>
          <dd>
            <a href="#">TWITTER</a>
          </dd>
          <dd>
            <a href="#">PINTEREST</a>
          </dd>
          <dd>
            <a href="#">YOUTUBE</a>
          </dd>
        </div>
        <div>
          <dt>Company</dt>
          <dd>
            <a href="#">About US</a>
          </dd>
          <dd>
            <a href="#">STORES</a>
          </dd>
          <dd>
            <a href="#">WORK WITH US</a>
          </dd>
        </div>
        <div>
          <dt>POLICIES</dt>
          <dd>
            <a href="#">PRIVACY POLICY</a>
          </dd>
          <dd>
            <a href="#">TERMS OF USE</a>
          </dd>
        </div>
      </dl>

      <small>
        © ALL RIGHTS RESERVED | Built by{' '}
        <a href="https://github.com/mobalti">Arby</a> | Powered by Open Props
      </small>
    </footer>
  );
}
