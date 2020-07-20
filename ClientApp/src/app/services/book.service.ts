import { Injectable, Inject } from '@angular/core';
import { IBook } from '../ibook';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: IBook[];
 // myUrl = this.baseUrl + 'books';
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  GetBooks(): Promise<IBook[]> {
    return this.http.get<IBook[]>(`${this.baseUrl}books`).toPromise();
  }

  // is this even close to how I would pass an author to my GetBooksForAuthor method in my controller??
  // GetBooksForAuthor(author: string): Promise<IBook[]> {
  //   return this.http.get<IBook[]>(`${this.baseUrl}books`).toPromise();
  // }

  AddBook(newBook: IBook): Promise<IBook> {
    return this.http.post<IBook>(`${this.baseUrl}books`, newBook).toPromise();
  }
}
