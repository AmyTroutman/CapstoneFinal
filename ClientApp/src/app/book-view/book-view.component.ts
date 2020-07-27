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
  // title: string;
  // author: string;
  // notes: string;
  // form: string;
  // series: string;
  // id: number;
  constructor(private bookService: BookService) { }

  getBook() {
    const bIndex = this.books.findIndex(b => b.id === this.bookId);
    return this.books[bIndex];
  }

  async ngOnInit() {
    this.bookId = this.bookService.bookId;
    this.books = await this.bookService.GetBooks();
    this.book = this.getBook();
    // this.title = this.book.title;
    // this.author = this.book.author;
    // this.notes = this.book.notes;
    // this.form = this.book.form;
    // this.series = this.book.series;
  }

}
