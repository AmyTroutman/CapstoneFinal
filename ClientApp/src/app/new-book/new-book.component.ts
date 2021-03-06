import { Component, OnInit, ViewChild } from '@angular/core';
import { IBook } from '../ibook';
import { BookService } from '../services/book.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SaveModalComponent } from '../save-modal/save-modal.component';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {

  currentUserId;
  public newBook: IBook = {
    title: '',
    author: '',
    notes: '',
    series: '',
    type: '',
    genre: '',
    status: '',
    cover: '',
    loaned: false};
  created = false;
  options: string[];
  types: string[];
  isbn: number;
  results: any[];
  message: string;
  @ViewChild('f', {static: true}) form: any;

  constructor(private bookService: BookService, private modalService: NgbModal) { }

  async ngOnInit() {
   this.options = this.bookService.statuses;
   this.types = this.bookService.types;
  }

  async save(): Promise<void> {
    const modal = this.modalService.open(SaveModalComponent);
    const modalComponent = modal.componentInstance;
    modalComponent.modalInstance = modal;

    if (this.newBook.series === '') {
      this.newBook.series = 'n/a';
    }
    if (this.newBook.status === 'Borrowed') {
      this.newBook.loaned = true;
    }
    await this.bookService.AddBook(this.newBook);
    this.newBook = {title: '', author: '', notes: '', series: '', type: '', userId: '', genre: '', status: '', cover: '', loaned: false};
  }

  async getByIsbn() {
    const book = await this.bookService.getByIsbn(this.isbn);
    console.log(book);
  }

  async getCover(title: string) {
    await this.bookService.getCover(title);
    this.results = this.bookService.searchResults[0].docs;
    if (this.results.length === 0) {
      this.message = 'No covers found';
    // commented out because it includes results that don't actually have a cover
    // } else {
    //   this.message = `Covers found: ${this.results.length}`;
   }
  }

  chooseCover(result) {
    this.newBook.cover = result.cover_i.toString();
    this.results.length = 0;
  }
}
