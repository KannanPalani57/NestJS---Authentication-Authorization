import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthRepository } from "./AuthRepository";
import {JwtModule} from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { JwtStrategy } from "./jwtStrategy";


@Module({
  imports:[  
    PassportModule.register({defaultStrategy: "jwt"}),
    JwtModule.register({
      secret: "mysecretsign",
      signOptions: {
        expiresIn: 3600,
      }
    }),
    TypeOrmModule.forFeature([AuthRepository]),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy]
})
export class AuthModule {}
