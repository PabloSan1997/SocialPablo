import {Entity, Column, PrimaryGeneratedColumn, OneToOne} from 'typeorm';
import { Usuario } from './Usuario';


@Entity()
export class UsuarioInfo implements UsuarioInfoInterface{
    @PrimaryGeneratedColumn('uuid')
    id_user_info: string;

    @Column({length:500})
    descripcion: string;

    @Column({length:5000})
    url_perfil: string;

    @OneToOne(()=>Usuario, usuario=>usuario.usuarioInfo)
    usuario:Usuario;
}