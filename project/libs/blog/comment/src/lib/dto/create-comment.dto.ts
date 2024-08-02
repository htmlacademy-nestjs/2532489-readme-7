import {PostAuthor} from "../../../../../shared/core/src/lib/types/post-author.interface";

export class CreateCommentDto {
  public text: string;
  public author: PostAuthor;
  public post_id: string;
}
