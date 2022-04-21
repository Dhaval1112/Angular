export class BookModel {
  id!: number;
  name!: string;
  title!: string;
  totalPages!: number;
  authorId!: number;
  authorName?: string = '';
}
