import { Module } from '@nestjs/common';
import {CommentModule} from "@project/comment";
import {PostModule} from "@project/post";

@Module({
  imports: [PostModule, CommentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
