import {Injectable, NotFoundException} from '@nestjs/common';
import {POST_NOT_FOUND} from "./post.constants";
import {PostRepository} from "./post.repository";
import {CreatePostDto} from "./dto/create-post.dto";
import {PostEntity} from "./post-entity";
import {CreateCommentDto} from "../../../comment/src/lib/dto/create-comment.dto";
import {CommentEntity} from "../../../comment/src/lib/comment-entity";
import {CommentRepository} from "../../../comment/src/lib/comment-repository";

@Injectable()
export class PostService {
  constructor(
    private readonly postRepository: PostRepository,
    private readonly commentRepository: CommentRepository
  ) {}

  public async save(dto: CreatePostDto): Promise<PostEntity> {
    const {
      title,
      text,
      description,
      type,
      is_repost,
      original_author,
      current_author,
      date_of_create,
      date_of_publish,
      original_id,
      status,
      tags,
      anouncement,
      photo_link,
      post_link,
      video_link
    } = dto;

    const newPost = {title, text, description, type,
      is_repost, original_author, current_author, date_of_create,
      date_of_publish, original_id, status, tags, anouncement,
      photo_link, post_link, video_link};

    const postEntity = await new PostEntity(newPost);
    await this.postRepository.save(postEntity);

    return postEntity;
  }

  public async remove(id: string){
    await this.postRepository.deleteById(id);
  }

  public async addComment(id: string, dto: CreateCommentDto): Promise<CommentEntity>{
    const post = await this.postRepository.findById(id);

    if(!post){
      throw new NotFoundException(POST_NOT_FOUND);
    }

    const { text, author} = dto;

    const newComment = {text, author, post_id: post.id};
    const commentEntity = new CommentEntity(newComment);

    await this.commentRepository.save(commentEntity);

    return commentEntity;
  }

  public async getAllComments(id: string){
    const comments = await this.commentRepository.getPostComments(id);
    return comments;
  }
}
