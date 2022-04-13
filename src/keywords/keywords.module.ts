import { Module } from '@nestjs/common';
import { KeywordsService } from './keywords.service';
import { KeywordsController } from './keywords.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Keyword } from './entities/keyword.entity';
import { AuthModule } from '../utilities/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Keyword]), AuthModule],
  controllers: [KeywordsController],
  providers: [KeywordsService],
})
export class KeywordsModule {}
