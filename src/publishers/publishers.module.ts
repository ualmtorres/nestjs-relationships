import { Module } from '@nestjs/common';
import { PublishersService } from './publishers.service';
import { PublishersController } from './publishers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Publisher } from './entities/publisher.entity';
import { AuthModule } from '../utilities/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Publisher]), AuthModule],
  controllers: [PublishersController],
  providers: [PublishersService],
})
export class PublishersModule {}
