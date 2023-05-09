export interface IEntry {
  slug: string;
  title: string;
  id: Key | string | undefined;
  metadata: {
    image: { url: string };
    title: ReactNode | string;
    description: ReactNode | string;
  };
}
