import { Component, OnInit, ViewChild } from '@angular/core';
import { BookService } from '../services/book.service';
import { IBook } from '../ibook';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: IBook[];
  searching = false;
  dataSource: MatTableDataSource<IBook>;
  displayedColumns: string[] = [
    'id', 'title', 'author', 'series', 'notes', 'type'
  ];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private bookService: BookService) { }

  async ngOnInit() {
    this.books = await this.bookService.GetBooks();
    this.dataSource = new MatTableDataSource(this.books);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: any) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  cancel() {
    this.searching = false;
  }

}
