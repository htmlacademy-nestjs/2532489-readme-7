import { Module } from '@nestjs/common';
import { AuthentificationController } from './authentification.controller';
import { AuthentificationService } from './authentification.service';
import {BlogUserModule} from "@project/blog-user";

@Module({
  imports: [BlogUserModule],
  providers: [AuthentificationService],
  controllers: [AuthentificationController],
})
export class AuthentificationModule {}
