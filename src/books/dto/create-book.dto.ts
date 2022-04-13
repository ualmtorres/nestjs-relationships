import { ApiProperty } from '@nestjs/swagger';
import { Publisher } from '../../publishers/entities/publisher.entity';

export class CreateBookDto {
  @ApiProperty({ example: 'Don Quijote de la Mancha' })
  readonly title: string;

  @ApiProperty({ example: 'Novela' })
  readonly genre: string;

  @ApiProperty({
    example: 'Esta edición del Ingenioso hidalgo don Quijote de la Mancha ...',
  })
  readonly description: string;

  @ApiProperty({ example: 'Miguel de Cervantes' })
  readonly author: string;

  @ApiProperty({ example: 592 })
  readonly pages: number;

  @ApiProperty({ example: 'www.imagen.com/quijote.png' })
  readonly image_url: string;

  @ApiProperty({ example: { id: 1 } })
  readonly publisher: Publisher;
}
