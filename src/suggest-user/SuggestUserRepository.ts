import { EntityRepository, Repository } from 'typeorm';
import { SuggestUserEntity } from "./suggestUserEntity";
import {SuggestUserDto} from "./dto/suggestUserDto";
import { Logger, InternalServerErrorException } from '@nestjs/common';

@EntityRepository(SuggestUserEntity)
export class SuggestUserRepository extends Repository<SuggestUserEntity> {

    private logger = new Logger("SuggestUserRepository");

    async fetchUsers(): Promise<SuggestUserEntity[]>{
        const query = this.createQueryBuilder('suggestions')

        const suggestions = await query.getMany();
        return suggestions;
    }

    async postData(data: SuggestUserDto){
        const {username,product, budget, alternative1, alternative2, alternative3} = data;
        const user = new SuggestUserEntity();
        user.username = username;
        user.product = product;
        user.budget = budget;
        user.alternative1 = alternative1;
        user.alternative2 = alternative2;
        user.alternative3 = alternative3;

        try{
            await user.save();
        }catch(error){
            this.logger.error(`Failed to create a user`);
            throw new InternalServerErrorException();
        }

        return "The data has posted Successfully";
    }
}
