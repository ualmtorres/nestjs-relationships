import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Book } from '../../books/entities/book.entity';
@Entity()
export class Keyword {
  @ApiProperty({ example: 99 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'NestJS' })
  @Column()
  keyword: string;

  @ManyToMany(() => Book, (book: Book) => book.keywords)
  books: Book[];
}
