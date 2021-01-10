import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { SuggestUserModule } from './suggest-user/suggest-user.module';
import { SuggestUserEntity } from "./suggest-user/suggestUserEntity";
import { AuthModule } from './auth/auth.module';
import { UserEntity } from "./auth/userEntity"

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'suggestapp', 
      entities: [SuggestUserEntity, UserEntity],
      synchronize: true,
    }),
    SuggestUserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
