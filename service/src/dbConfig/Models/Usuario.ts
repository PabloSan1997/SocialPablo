import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { UsuarioInfo } from './UsuarioInfo';
import { Imagen } from './Imagen';
import { Comentario } from './Comentario';


@Entity()
export class Usuario implements UsuarioInterface {
    @PrimaryGeneratedColumn('uuid')
    id_user: string;

    @Column({ length: 100, unique: true })
    username: string;

    @Column({ length: 100 })
    nickname: string;

    @Column({ length: 5000 })
    password: string;

    @OneToOne(() => UsuarioInfo, usuarioInfo => usuarioInfo.usuario, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'idInfo' })
    usuarioInfo: UsuarioInfo;

    @OneToMany(() => Imagen, imagenes => imagenes.usuario)
    imagenes: Imagen[];

    @OneToMany(()=>Comentario, comentario=>comentario.usuario)
    comentarios:Comentario[];
}