import { Controller, Post, Body, UseGuards, Req } from '@nestjs/common';
import {SignupDto} from "./dto/signupDto";
import { AuthService } from "./auth.service";
import { SigninDto } from "./dto/signinDto";
import {AuthGuard} from  "@nestjs/passport";
 

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post("/signup")
    signupData(@Body() signupDto: SignupDto){
        return this.authService.signup(signupDto);
    }

    @Post("/signin")
    signIn(@Body() signinDto: SigninDto): Promise<{accessToken: string}>{
        return this.authService.validatePassword(signinDto);
    }
    
    @Post("/validate")
    @UseGuards(AuthGuard())
    validate(@Req() req){
        console.log(req)
    }
}
