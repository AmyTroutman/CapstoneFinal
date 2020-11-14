import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IBook } from '../ibook';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private booksUrl = 'https://openlibrary.org/api/books';
  private searchUrl = 'https://openlibrary.org/search.json?title=';
  constructor(private httpClient: HttpClient) { }

  get(searchTerm: string): Promise<any> {
    return this.httpClient.get<any[]>(`${this.searchUrl}${searchTerm.split(' ').join('+')}`).toPromise();
  }

  async getByIsbn(path) {
    return await this.httpClient.get<IBook[]>(this.booksUrl + path).toPromise();
  }

}
