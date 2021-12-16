import {
  Column,
  CreateDateColumn,
  Entity, 
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';


import { IsEmail, Max, MaxLength, Min, MinLength } from 'class-validator';
import { EncryptionTransformer } from 'typeorm-encrypted';
import { MyCrypto } from '../helpers/crypto';
@Entity()
export default class Student {
  @PrimaryGeneratedColumn('uuid')
  id: string;

 @Column({
  type: "varchar",
    nullable: false,
    transformer:MyCrypto,
  })

 @MaxLength(50, { message: 'O tamanho máximo do nome é de 50 caracteres' })
 @MinLength(3, { message: 'O tamanho mímino do nome é de 3 caracteres' })
  name: string;

  @Column({nullable:true})
  @Max(99999, { message: 'A maior chave deve ser 99999'})
  @Min(10000, { message: 'A menor chave deve ser 10000'})
  key: number;

  @Column({
    transformer:MyCrypto,
  })  
  @IsEmail()
  email: string;



  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_At' })
  updatedAt: Date;
}