import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { BookService } from '../services/book.service';
import { IBook } from '../ibook';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.css']
})
export class BookTableComponent implements OnInit {

  books: IBook[];
  searching = false;
  dataSource: MatTableDataSource<IBook>;
  displayedColumns: string[] = [
    'id', 'title', 'author', 'series', 'genre', 'type', 'status', 'view'
  ];
  @ViewChild(MatSort, {static: true})sort: MatSort;
  @ViewChild(MatPaginator, {static: true})paginator: MatPaginator;
  originalFilter: (data: any, filter: string) => boolean;

  constructor(private bookService: BookService, private modalService: NgbModal) { }

  async ngOnInit() {
    this.books = await this.bookService.GetBooks();
    this.dataSource = new MatTableDataSource<IBook>(this.books);
    this.originalFilter = this.dataSource.filterPredicate;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: any) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  cancel() {
    this.searching = false;
  }

}
