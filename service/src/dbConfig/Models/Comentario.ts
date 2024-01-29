import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, JoinTable} from 'typeorm';
import { Imagen } from './Imagen';
import { Usuario } from './Usuario';

@Entity()
export class Comentario{
    @PrimaryGeneratedColumn('increment')
    id_comentario:number;

    @Column()
    comentario:string;

    @ManyToOne(()=>Imagen, imagenes=>imagenes.usuario)
    @JoinColumn({name:'idImagen'})
    imagenes:Imagen;

    @ManyToOne(()=>Usuario, usuario=>usuario.comentarios)
    @JoinTable({name:'idUser'})
    usuario:Usuario;
}