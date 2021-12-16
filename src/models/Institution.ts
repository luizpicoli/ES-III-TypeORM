import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
    TableInheritance,
  } from 'typeorm';
import { MyCrypto } from '../helpers/crypto';
  
  // SuperClasse
  @Entity()
  @TableInheritance({column: { type:'varchar', name: 'type'} } )
  export default abstract class Institution {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({
      transformer:MyCrypto,
    })
    name: string;
  
    @Column({
      transformer:MyCrypto,
    })
    cnpj: string;
    
    @CreateDateColumn({ name: 'created_At' })
    createdAt: Date;
  
    @UpdateDateColumn({ name: 'updated_At' })
    updatedAt: Date;
  
  
  
  
  
  }