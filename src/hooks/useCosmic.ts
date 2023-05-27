import Cosmic from 'cosmicjs';

export function useCosmic() {
  async function getBucket() {
    const api = Cosmic();
    const bucket = await api.bucket({
      slug: process.env.COSMIC_BUCKET,
      read_key: process.env.COSMIC_READ_KEY,
    });

    return bucket;
  }

  async function getObject(objectType: string) {
    const bucket = await getBucket();
    const data = await bucket.objects.find({
      type: objectType, // Object Type slug
    });

    return data;
  }

  async function getSingleEntry(slug: string, objectType: string) {
    const bucket = await getBucket();
    const data = await bucket.objects
      .find({
        slug: slug, // Object slug
        type: objectType, // Object Type slug
      })
      .props('title,slug,metadata');

    return data;
  }

  async function getPage(name: string) {
    const bucket = await getBucket();
    const data = await bucket.objects
      .find({
        slug: name, // Object slug
        type: 'pages', // Object Type slug
      })
      .props('metadata');

    return data.objects[0].metadata;
  }
  return { getObject, getSingleEntry, getPage };
}
