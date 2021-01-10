import { Injectable, UnauthorizedException } from '@nestjs/common';
import {AuthRepository} from "./AuthRepository";
import { SignupDto } from "./dto/signupDto";
import { SigninDto } from "./dto/signinDto";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class AuthService {
    constructor(@InjectRepository(AuthRepository) private authRepository: AuthRepository, private jwtService: JwtService){}

    async signup(data: SignupDto){
       return this.authRepository.signup(data);
    }

    async validatePassword(data: SigninDto): Promise<{accessToken: string}>{
        const username = await this.authRepository.validatePass(data);

        if(!username){
            throw new UnauthorizedException("Invalid credentials")
        }

        const payload = { username }; //You can add multiple data
        const accessToken = await this.jwtService.sign(payload)

        return{accessToken};
    }
}
