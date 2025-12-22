export type Props = {
    children: React.ReactNode
}
export type Pokemon = {
  name: string;
  url: string;
}
export type CardDetail = {
        imageUrl: string;
        details: {
            id: string;
            category: string;
            value: string;
        }[];
    };