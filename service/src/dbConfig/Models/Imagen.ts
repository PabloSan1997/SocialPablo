import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany} from 'typeorm';
import { Usuario } from './Usuario';
import { Comentario } from './Comentario';


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

    @OneToMany(()=>Comentario, comentario => comentario.imagenes)
    comentario:Comentario[];
}