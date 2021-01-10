import { Controller, Get, Post, Body } from '@nestjs/common';
import { SuggestUserDto } from "./dto/suggestUserDto";
import { SuggestUserService } from "./suggest-user.service";
import {SimpleDto} from "./dto/simpleDto";
import {SuggestUserEntity} from "./suggestUserEntity";

@Controller('suggestUser')
export class SuggestUserController {
    constructor(private suggestUserService: SuggestUserService){}  
   
    @Get("/allUsers")
    showSomething(): Promise<SuggestUserEntity[]>{
        return this.suggestUserService.fetchAllUsers();
    }

    // @Post("/simple")
    // postSimpleItem(@Body() simpleData: SimpleDto){
    //     console.log(simpleData);
    //     return "Thank you ngrok";
    // }

    @Post()
    postSuggestUserData(@Body() suggestUserData: SuggestUserDto){
        return this.suggestUserService.suggestUserData(suggestUserData);
    }


}
