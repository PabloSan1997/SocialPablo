import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';


@Entity()
export class UsuarioInfo implements UsuarioInfoInterface{
    @PrimaryGeneratedColumn('increment')
    id_user_info: number;

    @Column({length:500})
    descripcion: string;

    @Column({length:5000})
    url_perfil: string;
}