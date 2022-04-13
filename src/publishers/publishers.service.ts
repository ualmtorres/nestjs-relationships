import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreatePublisherDto } from './dto/create-publisher.dto';
import { UpdatePublisherDto } from './dto/update-publisher.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Publisher } from './entities/publisher.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PublishersService {
  constructor(
    @InjectRepository(Publisher)
    private publishersRepository: Repository<Publisher>,
  ) {}
  create(createPublisherDto: CreatePublisherDto): Promise<Publisher> {
    return this.publishersRepository.save(createPublisherDto);
  }

  async findAll(): Promise<Publisher[]> {
    return this.publishersRepository.find({ relations: ['books'] });
  }

  async findOne(id: number): Promise<Publisher> {
    return this.publishersRepository.findOne({
      where: { id },
      relations: ['books'],
    });
  }

  async update(id: number, updatePublisherDto: UpdatePublisherDto) {
    if (await this.publishersRepository.findOne({ where: { id } })) {
      return this.publishersRepository.update(id, updatePublisherDto);
    }
    throw new HttpException('Publisher not found', HttpStatus.NOT_FOUND);
  }

  async remove(id: number) {
    if (await this.publishersRepository.findOne({ where: { id } })) {
      return this.publishersRepository.delete({ id });
    }
    throw new HttpException('Publisher not found', HttpStatus.NOT_FOUND);
  }
}
