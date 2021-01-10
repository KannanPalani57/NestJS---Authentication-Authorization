import * as bcrypt from "bcrypt";
import { UserEntity } from "./userEntity";
import {Repository, EntityRepository} from "typeorm";
import { SignupDto } from "./dto/signupDto";
import { SigninDto } from "./dto/signinDto";

@EntityRepository(UserEntity)
export class AuthRepository extends Repository<UserEntity>{
    
    async signup(data: SignupDto): Promise<SignupDto>{
        const {fullname, username, email, password} = data;
        const salt = await bcrypt.genSalt();
        const passwordHash = await this.hashPassword(password, salt)
        
        const createUser = this.create(
            {
                fullname,
                username,                
                email,
                salt,
                password: passwordHash,
            }
        )
        
        await this.save(createUser)
            .catch(err => console.log(err))

       return createUser;     
    }

    async validatePass(data: SigninDto){
        const {username, password} = data;

        const user = await this.findOne({username});

        if(user && await user.validatePassword(password)){
            return user.username;
        }else{
            return null;
        }
    }

    async hashPassword(password: any, salt: any){
        return bcrypt.hash(password, salt);
    }
}