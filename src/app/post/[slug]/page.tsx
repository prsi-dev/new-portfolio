import Image from 'next/image';

import { useCosmic } from '@/hooks/useCosmic';
import GoBack from '@/components/navigation/GoBack';

type Params = { params: { slug: string } };

//Weird error with Params types from next
export default async function Page({ params }: Params) {
  const { getSingleEntry } = useCosmic();



  const shapeEntry = async (params: any, objectType: string) => {
    const entryData = await getSingleEntry(params?.slug, objectType);
    const shapedEntry = entryData.objects.map((post: any) => {
      return { title: post.title, description: post.metadata.description, image: post.metadata.image.url };
    });

    return shapedEntry[0];
  };

  const entry = await shapeEntry(params, 'sections');

  return (
    <div>
      <GoBack />
      <h1>{entry.title}</h1>
      <p>{entry.description}</p>
      <Image src={entry.image} width={50} height={50} alt={'alt'} />
    </div>
  );
}
