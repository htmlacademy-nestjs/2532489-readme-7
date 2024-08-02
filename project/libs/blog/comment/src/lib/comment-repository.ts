import {Injectable} from "@nestjs/common";
import {BaseMemoryRepository} from "@project/data-access";
import {CommentEntity} from "./comment-entity";
import {CommentFactory} from "./comment.factory";
import {all} from "axios";
import {Comment} from "../../../../shared/core/src/lib/types/comment.interface";

@Injectable()
export class CommentRepository extends BaseMemoryRepository<CommentEntity>{
  constructor(entityFactory: CommentFactory) {
    super(entityFactory);
  }

  public async getPostComments(id: string): Promise<Comment[]> {
    const allComments = Array.from(this.entities.values());
    const filteredComments = allComments.filter(comment => comment.post_id === id);

    return filteredComments;
  }
}
