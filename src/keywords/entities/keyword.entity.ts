import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
@Entity()
export class Keyword {
  @ApiProperty({ example: 99 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'NestJS' })
  @Column()
  keyword: string;
}
