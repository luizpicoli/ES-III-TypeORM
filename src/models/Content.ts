import {
    Entity,
    Column,
    PrimaryGeneratedColumn,  
    UpdateDateColumn,
    CreateDateColumn,
  } from 'typeorm';
import { MyCrypto } from '../helpers/crypto';
  
  
  @Entity('content')
  export default class Content {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    
  
    @Column()
    description: string;
  
    @Column({transformer:MyCrypto,})
    linkContent: string;
  
    @CreateDateColumn({ name: 'created_At' })
    createdAt: Date;
  
    @UpdateDateColumn({ name: 'updated_At' })
    updatedAt: Date;
  }