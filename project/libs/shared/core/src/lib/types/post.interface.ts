import {PostType} from "./post-type.enum";
import {PostAuthor} from "./post-author.interface";
import {PostStatus} from "./post-status.enum";
import {PostTag} from "./post-tag.interface";

export interface Post {
  id?: string;
  title: string;
  text: string;
  description: string;
  type: PostType;
  is_repost: boolean;
  original_author: PostAuthor | null;
  current_author: PostAuthor;
  date_of_create: Date;
  date_of_publish: Date;
  original_id: string;
  status: PostStatus;
  tags: PostTag[];
  anouncement: string | null;
  photo_link: string | null;
  post_link: string | null;
  video_link: string | null;
}
