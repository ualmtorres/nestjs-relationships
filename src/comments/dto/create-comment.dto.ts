import { ApiProperty } from '@nestjs/swagger';
export class CreateCommentDto {
  @ApiProperty({ example: 'Genial!!' })
  readonly title: string;

  @ApiProperty({ example: 5 })
  readonly stars: number;

  @ApiProperty({
    example:
      'Compré el libro por los comentarios tan buenos que tenía. El libro comentá la historia de España de manera muy general y desde un punto de vista súper simplista. Resumiendo temas de compleja explicación en tan solo una frase. ',
  })
  readonly comment: string;

  @ApiProperty({ example: 'johndoe' })
  readonly username: string;
}
