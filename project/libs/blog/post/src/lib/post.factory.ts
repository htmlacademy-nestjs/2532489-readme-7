import {Injectable} from "@nestjs/common";
import {EntityFactory} from "@project/core";
import {PostEntity} from "./post-entity";
import {Post} from "../../../../shared/core/src/lib/types/post.interface";

@Injectable()
export class PostFactory implements EntityFactory<PostEntity>{
  public create(entityPlainData: Post): PostEntity{
    return new PostEntity(entityPlainData);
  }
}
