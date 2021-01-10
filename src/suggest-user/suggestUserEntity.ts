import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class SuggestUserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  product: string;

  @Column()
  budget: number;

  @Column()
  alternative1: string;

  @Column()
  alternative2: string;

  @Column()
  alternative3: string;

}

