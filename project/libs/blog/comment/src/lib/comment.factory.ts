import {Injectable} from "@nestjs/common";
import {EntityFactory} from "@project/core";
import {CommentEntity} from "./comment-entity";
import {Comment} from "../../../../shared/core/src/lib/types/comment.interface";

@Injectable()
export class CommentFactory implements EntityFactory<CommentEntity>{
  public create(entityPlainData: Comment): CommentEntity {
    return new CommentEntity(entityPlainData);
  }
}
