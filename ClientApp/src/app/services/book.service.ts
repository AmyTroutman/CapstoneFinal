import { Injectable, Inject } from '@angular/core';
import { IBook } from '../ibook';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: IBook[];
  bookId: number;
 // myUrl = this.baseUrl + 'books';
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  GetBooks(): Promise<IBook[]> {
    return this.http.get<IBook[]>(`${this.baseUrl}books`).toPromise();
  }

  AddBook(newBook: IBook): Promise<IBook> {
    return this.http.post<IBook>(`${this.baseUrl}books`, newBook).toPromise();
  }

  GetId(id) {
    this.bookId = id;
    console.log(id);
  }

}
