import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import {PostRepository} from "./post.repository";
import {PostFactory} from "./post.factory";
import {CommentModule} from "@project/comment";

@Module({
  imports: [CommentModule],
  controllers: [PostController],
  providers: [PostService, PostRepository, PostFactory],
  exports: [PostService]
})
export class PostModule {}
