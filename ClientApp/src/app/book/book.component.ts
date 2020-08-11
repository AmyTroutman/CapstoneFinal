import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { BookService } from '../services/book.service';
import { IBook } from '../ibook';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input()book: IBook;
  books: IBook[];
  searching = false;
  dataSource: MatTableDataSource<IBook>;
  displayedColumns: string[] = [
    'id', 'title', 'author', 'series', 'genre', 'type'
  ];
  @ViewChild(MatSort, {static: true})sort: MatSort;
  @ViewChild(MatPaginator, {static: true})paginator: MatPaginator;
  originalFilter: (data: any, filter: string) => boolean;

  constructor(private bookService: BookService) { }

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

  modBook() {
    this.bookService.modModal(this.book);
  }

  buttonToggle(event: MatButtonToggleChange): void {
    switch (event.value) {
      case 'series':
        this.dataSource.filterPredicate = this.filterBySeries;
        break;
      case 'author':
        this.dataSource.filterPredicate = this.filterByAuthor;
        break;
      default:
        this.dataSource.filterPredicate = this.originalFilter;
        break;
    }
  }

  private filterBySeries(data: any, filter: string): boolean {
    return data.series === filter;
  }
  private filterByAuthor(data: any, filter: string): boolean {
    return data.author === filter;
  }

}
