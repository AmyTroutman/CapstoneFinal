import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBook } from '../ibook';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  async Get() {
    return await this.http.get<IBook>(this.baseUrl + 'book').toPromise();
  }

}
