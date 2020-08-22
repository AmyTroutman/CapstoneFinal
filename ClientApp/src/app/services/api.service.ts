import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBook } from '../ibook';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private bookUrl = 'https://openlibrary.org/api/books?';
  private isbnRequest = 'bibkeys=ISBN:{{this.isbn}}&format=json';
  constructor(private http: HttpClient) { }

  async getBookByIsbn(options?: any): Promise<any> {
    return this.http.get(this.bookUrl, bibkeys=ISBN:this.isbn&format=json, {headers: null, params: options}).toPromise();
  }
}
