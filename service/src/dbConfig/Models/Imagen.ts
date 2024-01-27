import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
import { Usuario } from './Usuario';


@Entity()
export class Imagen implements ImagenInterface{
    @PrimaryGeneratedColumn('increment')
    id_imagen: number;

    @Column({length:500})
    image_description: string;

    @Column({length:5000})
    url_image: string;

    @ManyToOne(()=>Usuario, usuario => usuario.usuarioInfo, {onDelete:'CASCADE'})
    @JoinColumn({name:'idUser'})
    usuario:Usuario;

}