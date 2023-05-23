interface IReview {
  user: string;
  comment: string;
}

export type Price = string | number;

export interface IBook {
  title: string;
  author: Array<string>;
  genre: string;
  publicationYear: number;
  rating: number;
  price: Price;
  publisher: {
    name: string;
    location: string;
  };
  reviews: Array<IReview>;
}
