import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { BookService } from '../services/book.service';
import { IBook } from '../ibook';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input()book: IBook;
  books: IBook[];
  searching = false;

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
}
