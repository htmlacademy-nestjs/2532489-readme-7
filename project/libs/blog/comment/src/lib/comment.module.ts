import { Module } from '@nestjs/common';
import { CommentRepository } from './comment-repository';
import { CommentFactory } from './comment.factory';
import { CommentService } from './comment.service';

@Module({
  providers: [CommentRepository, CommentFactory, CommentService],
  exports: [CommentRepository],
})
export class CommentModule {}
