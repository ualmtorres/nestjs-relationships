import { Injectable } from '@nestjs/common';
import { CreateKeywordDto } from './dto/create-keyword.dto';
import { UpdateKeywordDto } from './dto/update-keyword.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Keyword } from './entities/keyword.entity';

@Injectable()
export class KeywordsService {
  constructor(
    @InjectRepository(Keyword)
    private keywordsRepository: Repository<Keyword>,
  ) {}
  create(createKeywordDto: CreateKeywordDto): Promise<Keyword> {
    return this.keywordsRepository.save(createKeywordDto);
  }

  async findAll(): Promise<Keyword[]> {
    return this.keywordsRepository.find();
  }

  async findOne(id: number): Promise<Keyword> {
    return this.keywordsRepository.findOne({
      where: { id },
    });
  }

  findBooks(id: number): Promise<Keyword> {
    return this.keywordsRepository.findOne({
      where: { id },
    });
  }

  async update(id: number, updateKeywordDto: UpdateKeywordDto) {
    return this.keywordsRepository.update(id, updateKeywordDto);
  }

  async remove(id: number) {
    return this.keywordsRepository.delete({ id });
  }
}
