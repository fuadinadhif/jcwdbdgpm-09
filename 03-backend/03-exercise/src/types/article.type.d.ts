export interface IArticle {
  id: number;
  title: string;
  image: string;
  content: string;
  category: string;
  likes: number;
  createdAt: Date;
  updatedAt: Date | null;
}
