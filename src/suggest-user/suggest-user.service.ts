import { Injectable } from '@nestjs/common';
import { SuggestUserDto  } from "./dto/suggestUserDto";
import {SuggestUserEntity} from "./suggestUserEntity";
import {SuggestUserRepository} from "./SuggestUserRepository";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class SuggestUserService {
    constructor(@InjectRepository(SuggestUserRepository) private suggestUserRepository: SuggestUserRepository){}

    async suggestUserData(data: SuggestUserDto){
        return this.suggestUserRepository.postData(data);
    }

    async fetchAllUsers(): Promise<SuggestUserEntity[]>{
        return this.suggestUserRepository.fetchUsers();
    }
}
