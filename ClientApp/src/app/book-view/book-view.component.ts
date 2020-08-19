import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../services/book.service';
import { IBook } from '../ibook';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {

  books: IBook[];
  bookId: number;
  book: IBook = {id: 0, title: '', author: '', notes: '', series: '', type: '', userId: '', genre: '', status: ''};

  constructor(private bookService: BookService, private route: ActivatedRoute) { }

  async ngOnInit() {
    this.bookId = this.route.snapshot.params.id;
    this.books = await this.bookService.GetBooks();
    this.book = await this.bookService.GetBook(this.bookId);
    console.log(this.book);
  }

  async save(): Promise<void> {
    await this.bookService.UpdateBook(this.bookId, this.book);
    this.book = {id: this.bookId, title: '', author: '', notes: '', series: '', type: '', userId: '', genre: '', status: ''};
    this.books = await this.bookService.GetBooks();
  }

  async deleteBook(): Promise<void> {
    await this.bookService.DeleteBook(this.bookId);
    this.books = await this.bookService.GetBooks();
  }

}
