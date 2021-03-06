import { Component, OnInit } from '@angular/core';
import { AuthorizeService } from 'src/api-authorization/authorize.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IBook } from '../ibook';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  public isAuthenticated: Observable<boolean>;
  public userName: Observable<string>;
  books: IBook[];
  read: IBook[] = [];
  reading: IBook[] = [];
  get: IBook[] = [];


  constructor(private authorizeService: AuthorizeService, private bookService: BookService) {   }

  async ngOnInit() {
    this.isAuthenticated = this.authorizeService.isAuthenticated();
    this.userName = this.authorizeService.getUser().pipe(map(u => u && u.name));
    this.books = await this.bookService.GetBooks();
    this.read = this.books.filter(b => b.status === 'Wanna Read');
    this.reading = this.books.filter(b => b.status === 'Am Reading');
    this.get = this.books.filter(b => b.status === 'Need to Get');
  }

}
