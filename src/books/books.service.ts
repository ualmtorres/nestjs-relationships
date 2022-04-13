import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book) private booksRepository: Repository<Book>,
  ) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    return this.booksRepository.save(createBookDto);
  }
  async findAll(): Promise<Book[]> {
    return this.booksRepository.find({ relations: ['publisher', 'comments'] });
  }

  async findOne(id: number): Promise<Book> {
    return this.booksRepository.findOne({
      where: { id },
      relations: ['publisher', 'comments'],
    });
  }

  async update(id: number, updateBookDto: UpdateBookDto): Promise<Book> {
    let toUpdate = await this.booksRepository.findOne({
      where: { id },
    });

    let updated = Object.assign(toUpdate, updateBookDto);

    return this.booksRepository.save(updated);
  }

  async remove(id: number): Promise<any> {
    return this.booksRepository.delete({ id });
  }
}
