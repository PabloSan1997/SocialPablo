/* eslint-disable no-mixed-spaces-and-tabs */
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany, CreateDateColumn } from 'typeorm';
import { Usuario } from './Usuario';
import { Comentario } from './Comentario';


@Entity()
export class Imagen implements ImagenInterface {
    @PrimaryGeneratedColumn('uuid')
    	id_imagen: string;

    @Column({ length: 500 })
    	image_description: string;

    @Column({ length: 5000 })
    	url_image: string;

    @CreateDateColumn()
    	createdAt: Date;

    @ManyToOne(() => Usuario, usuario => usuario.usuarioInfo, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'idUser' })
    	usuario: Usuario;

    @OneToMany(() => Comentario, comentario => comentario.imagenes)
    	comentario: Comentario[];
}