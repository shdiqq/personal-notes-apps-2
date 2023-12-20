import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./index.module.css"

function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 Not Found</h1>
      <p className={styles.message}>
        Oops! The page you are looking for might be in another castle.
      </p>
      <p className={styles.message}>
        Go back to <Link to="/">home</Link>.
      </p>
    </div>
  );
}

export default NotFound;
