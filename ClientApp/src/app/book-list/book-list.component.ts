import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { BookService } from '../services/book.service';
import { IBook } from '../ibook';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: IBook[];
  @Input()book;

    constructor(private bookService: BookService) { }

  async ngOnInit() {
    this.books = await this.bookService.GetBooks();
  }

  getBooks(status?: string) {
    if (status === undefined) {
      return this.books;
    }
    return this.books.filter(t => t.status === status);
  }

  async deleteBook(id: number): Promise<void> {
    await this.bookService.DeleteBook(id);
    this.books = await this.bookService.GetBooks();
  }

}
