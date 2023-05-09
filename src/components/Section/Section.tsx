import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import { IEntry } from './Section.d';

import styles from './Section.module.css';

type SectionProps = { element: IEntry };

const Section: FunctionComponent<SectionProps> = ({ element }) => {
  return (
    <div className={styles.body}>
      <Link href={`/post/${element.slug}`} className={styles.link}>
        <h3 className={styles.title}>{element.title}</h3>
        <Image src={element.metadata.image.url} width={50} height={50} alt={'alt'} />
      </Link>
    </div>
  );
};

export default Section;
