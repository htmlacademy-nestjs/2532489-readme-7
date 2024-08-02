import { Module } from '@nestjs/common';
import {AuthentificationModule} from "@project/authentification";
import {BlogUserModule} from "@project/blog-user";

@Module({
  imports: [
    AuthentificationModule,
    BlogUserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
