import { Injectable, Inject } from '@angular/core';
import { IBook } from '../ibook';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: IBook[];
  bookId: number;
  statuses = ['Wanna Read', 'Am Reading', 'Have Read', 'Need to Buy', 'Didn\'t Finish', 'Borrowed'];
  types = ['Paperback', 'Hardback', 'eBook', 'Audiobook', 'Other'];
  searchResults: any[] = [];

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private apiService: ApiService) { }

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

  async getByIsbn(isbn: number) {
    return await this.apiService.getByIsbn('?bibkeys=ISBN:' + isbn + '&jscmd=data&format=json');
  }

  async getCover(title: string): Promise<void> {
    // const response = await this.apiService.get(title);
    this.searchResults.length = 0;
    this.searchResults.push(await this.apiService.get(title));
  }

}
