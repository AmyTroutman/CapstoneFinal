import { Component, OnInit } from '@angular/core';
import { IBook } from '../ibook';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {

  currentUserId;
  public newBook: IBook = {title: '', author: '', notes: '', series: '', type: '', userId: this.currentUserId};
  public books: IBook[];
  created = false;
  constructor(private bookService: BookService) { }

  async ngOnInit() {
    this.books = await this.bookService.GetBooks();
  }

  async save(): Promise<void> {
    // await this.bookService.AddBook(this.newBook);
    // this.newBook = {title: '', author: '', notes: '', series: '', type: '', userId: ''};
    // this.books = await this.bookService.GetBooks();

    // This is what Jordan did. Said this is the only way to get the id of the new book.
    const newBook = await this.bookService.AddBook(this.newBook);
    this.books.push(newBook);
  }

}
