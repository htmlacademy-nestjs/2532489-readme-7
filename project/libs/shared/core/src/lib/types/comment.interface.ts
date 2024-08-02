import {PostAuthor} from "./post-author.interface";

export interface Comment {
  id?: string;
  text: string;
  author: PostAuthor;
  post_id: string;
}
