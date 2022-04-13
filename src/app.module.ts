import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
import { PublishersModule } from './publishers/publishers.module';
import { BooksModule } from './books/books.module';
import { CommentsModule } from './comments/comments.module';
import { KeywordsModule } from './keywords/keywords.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    PublishersModule,
    BooksModule,
    CommentsModule,
    KeywordsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
