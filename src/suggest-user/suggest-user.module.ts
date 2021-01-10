import { Module } from '@nestjs/common';
import { SuggestUserController } from "./suggest-user.controller";
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuggestUserService } from './suggest-user.service';
import { SuggestUserRepository } from "./SuggestUserRepository";

@Module({
    imports: [
        TypeOrmModule.forFeature([SuggestUserRepository]),
      ],
      controllers: [SuggestUserController],
      providers: [SuggestUserService],
})
export class SuggestUserModule {}
