import {PassportStrategy} from "@nestjs/passport";
import {Strategy, ExtractJwt} from "passport-jwt";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AuthRepository } from "./authRepository";
import { Repository } from "typeorm";
import  {UserEntity} from "./userEntity"

interface JwtPayload{
    username: any;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(@InjectRepository(AuthRepository) private authRepository: AuthRepository){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: "mysecretsign",
        })
    }

    async validate(payload: JwtPayload){
        const { username } = payload
        const user = await this.authRepository.findOne({ username })
        if(!username){
            throw new UnauthorizedException()
        }

        return user;
    }
}