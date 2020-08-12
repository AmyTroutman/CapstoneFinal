import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { IBook } from '../ibook';
import { ActivatedRoute } from '@angular/router';

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
  options: string[];

  constructor(private bookService: BookService, private route: ActivatedRoute) { }

  async ngOnInit() {
    this.bookId = this.route.snapshot.params.id;
   // this.books = await this.bookService.GetBooks();
    this.book = this.bookService.book;
    this.options = this.bookService.statuses;
  }

  async save(): Promise<void> {
    await this.bookService.UpdateBook(this.bookId, this.book);
    this.book = {title: '', author: '', notes: '', series: '', type: '', userId: '', genre: '', status: ''};
    // this.books = await this.bookService.GetBooks();
  }

  async deleteBook(id): Promise<void> {
    await this.bookService.DeleteBook(id);
    this.books = await this.bookService.GetBooks();

  }

}
