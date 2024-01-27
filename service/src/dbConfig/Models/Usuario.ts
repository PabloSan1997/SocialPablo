import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';


@Entity()
export class Usuario implements UsuarioInterface{
    @PrimaryGeneratedColumn('increment')
    id_user: number;

    @Column({length:100, unique:true})
    username: string;

    @Column({length:100})
    nickname: string;

    @Column({length:5000})
    password: string;
}