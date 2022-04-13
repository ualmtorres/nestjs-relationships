import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Publisher } from '../../publishers/entities/publisher.entity';

@Entity()
export class Book {
  @ApiProperty({ example: 99 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Don Quijote de la Mancha' })
  @Column()
  title: string;

  @ApiProperty({ example: 'Novela' })
  @Column()
  genre: string;

  @ApiProperty({
    example: 'Esta edición del Ingenioso hidalgo don Quijote de la Mancha ...',
  })
  @Column('text')
  description: string;

  @ApiProperty({ example: 'Miguel de Cervantes' })
  @Column()
  author: string;

  @ApiProperty({ example: 592 })
  @Column()
  pages: number;

  @ApiProperty({ example: 'www.imagen.com/quijote.png' })
  @Column()
  image_url: string;

  @ApiProperty({ example: { id: 1 } })
  @ManyToOne(() => Publisher, (publisher: Publisher) => publisher.books)
  publisher: Publisher;
}
