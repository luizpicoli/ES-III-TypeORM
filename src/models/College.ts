import { ChildEntity, Column, Entity } from 'typeorm';
import Institution from './Institution';

//@Entity('college')
// herdarĂ¡ tudo que existir em Institution

@ChildEntity()
export default class College extends Institution {

    @Column()
    graduations: string;

    @Column()
    year:number;

}