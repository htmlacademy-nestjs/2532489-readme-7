import {PostType} from "../../../../../shared/core/src/lib/types/post-type.enum";
import {PostAuthor} from "../../../../../shared/core/src/lib/types/post-author.interface";
import {PostStatus} from "../../../../../shared/core/src/lib/types/post-status.enum";
import {PostTag} from "../../../../../shared/core/src/lib/types/post-tag.interface";

export class CreatePostDto {
  public title: string;
  public text: string;
  public description: string;
  public type: PostType;
  public is_repost: boolean;
  public original_author: PostAuthor | null;
  public current_author: PostAuthor;
  public date_of_create: Date;
  public date_of_publish: Date;
  public original_id: string;
  public status: PostStatus;
  public tags: PostTag[];
  public anouncement: string | null;
  public photo_link: string | null;
  public post_link: string | null;
  public video_link: string | null;
}
