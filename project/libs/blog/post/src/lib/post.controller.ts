import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {PostService} from "./post.service";
import {CreatePostDto} from "./dto/create-post.dto";
import {CreateCommentDto} from "../../../comment/src/lib/dto/create-comment.dto";

@Controller('post')
export class PostController {
  constructor(
    private readonly postService: PostService
  ) {}

  @Post('save')
  public async create(@Body() dto: CreatePostDto){
    const newPost = await this.postService.save(dto);
    return newPost.toPOJO();
  }

  @Post('delete')
  public async delete(id: string){
    await this.postService.remove(id);
  }

  @Post(':id/comments/add_comment')
  public async add_comment(@Param('id') id: string, @Body() dto: CreateCommentDto){
    const newComment = await this.postService.addComment(id, dto);
    return newComment.toPOJO();
  }

  @Get(':id/comments')
  public async getComments(@Param('id') id: string){
    const postComments = await this.postService.getAllComments(id);
    return postComments;
  }
}
