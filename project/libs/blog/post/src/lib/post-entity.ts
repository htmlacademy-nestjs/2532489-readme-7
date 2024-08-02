import {Entity, StorableEntity} from "@project/core";
import {Post} from "../../../../shared/core/src/lib/types/post.interface";
import {PostType} from "../../../../shared/core/src/lib/types/post-type.enum";
import {PostAuthor} from "../../../../shared/core/src/lib/types/post-author.interface";
import {PostStatus} from "../../../../shared/core/src/lib/types/post-status.enum";
import {PostTag} from "../../../../shared/core/src/lib/types/post-tag.interface";
import {Injectable} from "@nestjs/common";

Injectable()
export class PostEntity extends Entity implements StorableEntity<Post>{
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

  constructor(post: Post) {
    super();
    this.populate(post);
  }

  public populate(post: Post): void{
    if(!post){
      return;
    }

    this.id = post.id ?? '';
    this.title = post.title;
    this.text = post.text;
    this.description = post.description;
    this.type = post.type;
    this.is_repost = post.is_repost;
    this.original_author = post.original_author;
    this.current_author = post.current_author;
    this.date_of_create = post.date_of_create;
    this.date_of_publish = post.date_of_publish;
    this.original_id = post.original_id;
    this.status = post.status;
    this.tags = post.tags;
    this.anouncement = post.anouncement;
    this.photo_link = post.photo_link;
    this.post_link = post.post_link;
    this.video_link = post.video_link;
  }

  public toPOJO(): Post {
    return {
      id: this.id,
      title: this.title,
      text: this.text,
      description: this.description,
      type: this.type,
      is_repost: this.is_repost,
      original_author: this.original_author,
      current_author: this.current_author,
      date_of_create: this.date_of_create,
      date_of_publish: this.date_of_publish,
      original_id: this.original_id,
      status: this.status,
      tags: this.tags,
      anouncement: this.anouncement,
      photo_link: this.photo_link,
      post_link: this.post_link,
      video_link: this.video_link
    }
  }
}
