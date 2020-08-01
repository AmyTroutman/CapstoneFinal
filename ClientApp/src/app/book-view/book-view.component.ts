import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { IBook } from '../ibook';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {

  loading = true;
  books: IBook[];
  bookId: number;
  book;

  constructor(private bookService: BookService) { }

  async ngOnInit() {
    this.bookId = this.bookService.bookId;
   // this.books = await this.bookService.GetBooks();
    this.book = this.bookService.book;
  }

}
