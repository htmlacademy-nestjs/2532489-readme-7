import {Injectable} from "@nestjs/common";
import {Entity, StorableEntity} from "@project/core";
import {Comment} from "../../../../shared/core/src/lib/types/comment.interface";
import {PostAuthor} from "../../../../shared/core/src/lib/types/post-author.interface";

@Injectable()
export class CommentEntity extends Entity implements StorableEntity<Comment> {
  public text: string;
  public author: PostAuthor;
  public post_id: string;

  constructor(comment: Comment) {
    super();
    this.populate(comment);
  }

  public populate(comment?: Comment): void{
    if(!comment){
      return;
    }

    this.id = comment.id ?? '';
    this.text = comment.text;
    this.author = comment.author;
    this.post_id = comment.post_id;
  }

  public toPOJO(): Comment {
    return {
      id: this.id,
      text: this.text,
      author: this.author,
      post_id: this.post_id
    }
  }
}
