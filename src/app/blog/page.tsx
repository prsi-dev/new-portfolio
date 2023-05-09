
import { useCosmic } from '@/hooks/useCosmic';
import Section from '@/components/Section/Section';
import GoBack from '@/components/navigation/GoBack';
import { IEntry } from '@/components/Section/Section.d';

import styles from '../page.module.css';
export default async function About() {
  const { getObject } = useCosmic();

  const sections = await getObject('sections');

  return (
    <main className={styles.main}>
      <GoBack />
      {sections.objects.map((section: IEntry) => (
        <Section key={section.id} element={section} />
      ))}
    </main>
  );
}
