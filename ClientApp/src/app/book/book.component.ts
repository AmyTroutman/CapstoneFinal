import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { IBook } from '../ibook';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private bookService: BookService) { }

  books: IBook[] = [];

  async ngOnInit() {
    this.books = await this.bookService.GetBooks();
  }

}
