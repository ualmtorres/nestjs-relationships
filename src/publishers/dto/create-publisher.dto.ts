import { ApiProperty } from '@nestjs/swagger';
export class CreatePublisherDto {
  @ApiProperty({ example: 'Booket' })
  readonly name: string;
}
