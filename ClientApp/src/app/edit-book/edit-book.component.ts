import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { ActivatedRoute } from '@angular/router';
import { IBook } from '../ibook';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  loading = true;
  books: IBook[];
  bookId: number;
  book: IBook;
  options: string[];
  types: string[];

  constructor(private bookService: BookService, private route: ActivatedRoute, private router: Router) { }

  async ngOnInit() {
    this.bookId = this.route.snapshot.params.id;
    this.book = await this.bookService.GetBook(this.bookId);
    this.options = this.bookService.statuses;
    this.types = this.bookService.types;
  }

  async save(): Promise<void> {
    if (this.book.series === '') {
      this.book.series = 'n/a';
    }
    await this.bookService.UpdateBook(this.bookId, this.book);
    this.book = {id: this.bookId, title: '', author: '', notes: '', series: '', type: '', userId: '', genre: '', status: '', loaned: false};
    this.books = await this.bookService.GetBooks();
    this.router.navigate(['/book', this.bookId]);
  }

}
