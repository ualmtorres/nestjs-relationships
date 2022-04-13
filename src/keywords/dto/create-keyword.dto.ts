import { ApiProperty } from '@nestjs/swagger';
export class CreateKeywordDto {
  @ApiProperty({ example: 'NestJS' })
  readonly keyword: string;
}
