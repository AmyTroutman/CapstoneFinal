import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBook } from '../ibook';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private booksUrl = 'https://openlibrary.org/api/books';
  constructor(private httpClient: HttpClient) { }

  async get(options?: any): Promise<IBook[]> {
    return this.httpClient.get<IBook[]>(this.booksUrl, {
      headers: null, params: options
    }).toPromise();
  }

  async getByIsbn(path) {
    return await this.httpClient.get<IBook[]>(this.booksUrl + path).toPromise();
  }
}
