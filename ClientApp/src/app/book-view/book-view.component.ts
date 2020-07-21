import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { IBook } from '../ibook';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {

  books: IBook[];
  book: IBook;
  bookId: number;
  constructor(private bookService: BookService) { }

  async ngOnInit() {
    this.bookId = this.bookService.bookId;
    this.books = await this.bookService.GetBooks();
    this.book = this.books.find(b => b.id === this.bookId);
  }

}
