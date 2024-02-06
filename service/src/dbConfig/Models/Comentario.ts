/* eslint-disable no-mixed-spaces-and-tabs */
import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, JoinTable} from 'typeorm';
import { Imagen } from './Imagen';
import { Usuario } from './Usuario';

@Entity()
export class Comentario{
    @PrimaryGeneratedColumn('uuid')
    	id_comentario:string;

    @Column()
    	comentario:string;

    @ManyToOne(()=>Imagen, imagenes=>imagenes.usuario, {onDelete:'CASCADE'})
    @JoinColumn({name:'idImagen'})
    	imagenes:Imagen;

    @ManyToOne(()=>Usuario, usuario=>usuario.comentarios, {onDelete:'CASCADE'})
    @JoinTable({name:'idUser'})
    	usuario:Usuario;
}