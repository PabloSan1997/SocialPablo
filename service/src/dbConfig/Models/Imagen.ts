import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';


@Entity()
export class Imagen implements ImagenInterface{
    @PrimaryGeneratedColumn('increment')
    id_imagen: number;

    @Column({length:500})
    image_description: string;

    @Column({length:5000})
    url_image: string;
}