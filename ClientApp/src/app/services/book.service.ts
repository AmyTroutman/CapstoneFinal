import { Injectable, Inject } from '@angular/core';
import { IBook } from '../ibook';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: IBook[];
  bookId: number;
  statuses = ['Wanna Read', 'Am Reading', 'Have Read', 'Need to Buy'];
  types = ['Paperback', 'Hardback', 'eBook', 'Audiobook', 'Other'];

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  GetBooks(): Promise<IBook[]> {
     return this.http.get<IBook[]>(`${this.baseUrl}books`).toPromise();
  }

  async GetBook(id: number) {
    return await this.http.get<IBook>(`${this.baseUrl}books/${id}`).toPromise();
  }

  AddBook(newBook: IBook): Promise<IBook> {
    return this.http.post<IBook>(`${this.baseUrl}books`, newBook).toPromise();
  }

  async UpdateBook(bookId: number, book: IBook) {
    return await this.http.put<IBook>(`${this.baseUrl}books/${bookId}`, book).toPromise();
  }

  async DeleteBook(bookId: number) {
    return await this.http.delete<IBook>(`${this.baseUrl}books/${bookId}`).toPromise();
  }

  getStatus(): string[] {
    return this.statuses;
  }

}
