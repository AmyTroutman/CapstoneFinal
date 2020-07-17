import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { IBook } from '../ibook';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: IBook[];
  constructor(private http: HttpService) { }

  GetBooks() {
    return this.http.Get();
  }
}
