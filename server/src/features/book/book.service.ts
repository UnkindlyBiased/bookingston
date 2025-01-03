import { Injectable } from '@nestjs/common';

import { BookRepository } from './book.repository';
import { BookUploadDto } from './dto/book-upload.dto';
import { BookEntity } from './book.entity';

@Injectable()
export class BookService {
    constructor(private repo: BookRepository) {}

    async getBooks(): Promise<BookEntity[]> {
        return await this.repo.getBooks();
    }
    async getBookById(id: string) {
        return await this.repo.getBookByCondition({ id });
    }
    async addBook(input: BookUploadDto): Promise<void> {
        await this.repo.create(input);
    }
    async editBookInfo(input: BookUploadDto): Promise<void> {
        const { id, ...rest } = input;

        await this.repo.update(id, rest);
    }
    async removeBook(bookId: string): Promise<void> {
        await this.repo.delete(bookId);
    }
}
