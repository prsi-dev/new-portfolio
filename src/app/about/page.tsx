import Image from 'next/image';

import styles from '../page.module.css';
import GoBack from '@/components/navigation/GoBack';
import { useCosmic } from '@/hooks/useCosmic';
export default async function About({}) {
  const { getPage } = useCosmic();

  const entry = await getPage('about');

  return (
    <main className={styles.main}>
      <GoBack />

      <div className={styles.hero}>
        <h1>{entry.title}</h1>
        <h4 className={styles.description}>{entry.description}</h4>
      </div>
    </main>
  );
}
