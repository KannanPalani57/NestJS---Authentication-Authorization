import {Entity, BaseEntity, PrimaryGeneratedColumn, Column} from "typeorm";
import * as bcrypt from "bcrypt"

@Entity()
export class UserEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullname: string;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column("varchar")
    salt: string;

    @Column()
    password: string;

    async validatePassword(password: any): Promise<boolean>{
        const hash = await bcrypt.hash(password, this.salt)
        return hash === this.password;
    }
}