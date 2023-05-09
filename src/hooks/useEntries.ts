import { createClient } from 'contentful';

export const useEntries = () => {
  async function getEntryType(type: string) {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID as string,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
    });
    const res = await client.getEntries({ content_type: type });

    return res.items;
  }
  return { getEntryType };
};
