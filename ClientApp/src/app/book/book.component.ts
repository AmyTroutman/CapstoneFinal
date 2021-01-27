import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../services/book.service';
import { IBook } from '../ibook';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: IBook[];

  constructor(private bookService: BookService) { }

  async ngOnInit() {
    this.books = await (await this.bookService.GetBooks()).sort((obj1, obj2) => obj1.title.localeCompare(obj2.title));
  }
}
