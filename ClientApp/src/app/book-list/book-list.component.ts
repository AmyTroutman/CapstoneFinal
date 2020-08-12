import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { BookService } from '../services/book.service';
import { IBook } from '../ibook';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: IBook[];
  @Input()book;

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
