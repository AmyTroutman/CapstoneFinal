import { Injectable, Inject } from '@angular/core';
import { IBook } from '../ibook';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: IBook[];
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  GetBooks(): Promise<IBook[]> {
    return this.http.get<IBook[]>(`${this.baseUrl}/catalog`).toPromise();
  }
}
