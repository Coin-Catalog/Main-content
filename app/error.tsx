'use client';

import { useEffect } from 'react';

import { blame } from './blame';

import styles from './styles/error.module.css';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    /* eslint-disable no-console */
    console.error(error);
  }, [error]);

  function blameFunc(e: any) {
    const person = e.target.id;

    blame(person);

    alert('Thanks for choosing who to blame.');
  }

  return (
    <div>
      <h2>Something went wrong!</h2>

      <p>Who do you want to blame for something going wrong? (Dont worry you wont fire anyone ;)</p>

      <br />

      <div className={`${styles.person}`} id="ethan" onClick={blameFunc}>
        <img alt="Ethan's pfp" src="images/ethan-pfp.png" />

        <p>Ethan</p>
      </div>

      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
