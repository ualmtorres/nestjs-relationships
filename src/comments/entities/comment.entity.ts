import { ApiProperty } from '@nestjs/swagger';
import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class Comment {
  @ApiProperty({ example: 99 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Genial!!' })
  @Column()
  title: string;

  @ApiProperty({ example: 5 })
  @Column()
  stars: number;

  @ApiProperty({
    example:
      'Compré el libro por los comentarios tan buenos que tenía. El libro comentá la historia de España de manera muy general y desde un punto de vista súper simplista. Resumiendo temas de compleja explicación en tan solo una frase. ',
  })
  @Column('text')
  comment: string;

  @ApiProperty({ example: 'johndoe' })
  @Column()
  username: string;
}
