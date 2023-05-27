import Link from 'next/link';
import { useCosmic } from '@/hooks/useCosmic';

import styles from './page.module.css';

export default async function Home() {
  const { getObject } = useCosmic();

  const heroSection = await getObject('hero-section');

  const title = heroSection.objects[0].metadata.title;
  const description = heroSection.objects[0].metadata.description;
  console.log(heroSection.objects[0].metadata);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          <Link href={'/about'}>
            <code className={styles.code}>{'About'}</code>
          </Link>
        </p>
        <p>
          <Link href={'/blog'}>
            <code className={styles.code}>{'Blog'}</code>
          </Link>
        </p>
      </div>
      <div className={styles.hero}>
        <h1 className={styles.code}>{title}</h1>
        <h4 className={styles.code}>{description}</h4>
      </div>
    </main>
  );
}
