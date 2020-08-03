import { Component, OnInit, ViewChild } from '@angular/core';
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

    constructor(private bookService: BookService) { }

  async ngOnInit() {
    this.books = await this.bookService.GetBooks();
  }

}
