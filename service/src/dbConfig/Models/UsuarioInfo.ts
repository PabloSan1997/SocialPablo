/* eslint-disable no-mixed-spaces-and-tabs */
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Usuario } from './Usuario';


@Entity()
export class UsuarioInfo implements UsuarioInfoInterface {
    @PrimaryGeneratedColumn('uuid')
    	id_user_info: string;

    @Column({ length: 500 })
    	descripcion: string;

    @CreateDateColumn()
    	createdAt: Date;

    @UpdateDateColumn()
    	updateAt: Date;

    @OneToOne(() => Usuario, usuario => usuario.usuarioInfo)
    	usuario: Usuario;
}