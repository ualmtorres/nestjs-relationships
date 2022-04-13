import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private commentsRepository: Repository<Comment>,
  ) {}
  create(createCommentDto: CreateCommentDto): Promise<Comment> {
    return this.commentsRepository.save(createCommentDto);
  }

  async findAll(): Promise<Comment[]> {
    return this.commentsRepository.find({ relations: ['book'] });
  }

  async findOne(id: number): Promise<Comment> {
    return this.commentsRepository.findOne({
      where: { id },
      relations: ['book'],
    });
  }

  async update(id: number, updateCommentDto: UpdateCommentDto) {
    return this.commentsRepository.update(id, updateCommentDto);
  }

  async remove(id: number) {
    return this.commentsRepository.delete({ id });
  }
}
