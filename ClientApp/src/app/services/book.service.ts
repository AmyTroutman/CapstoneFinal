import { Injectable, Inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BookViewComponent } from '../book-view/book-view.component';
import { IBook } from '../ibook';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: IBook[];
  book;
  bookId: number;
  statuses = ['Wanna Read', 'Am Reading', 'Have Read', 'Need to Buy'];
 // myUrl = this.baseUrl + 'books';
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private modalService: NgbModal) { }

  GetBooks(): Promise<IBook[]> {
     return this.http.get<IBook[]>(`${this.baseUrl}books`).toPromise();
  }

  async GetBook(id: number) {
    this.book = await this.http.get<IBook>(`${this.baseUrl}books/${id}`).toPromise();
    return this.book;
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

  async modModal(book: IBook) {
    const modal = this.modalService.open(BookViewComponent);
    const viewComponent = modal.componentInstance;
    viewComponent.modalInstance = modal;
  }

  GetId(id: number) {
    this.bookId = id;
    console.log(this.bookId);
  }

}
