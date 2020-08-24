import { Component, OnInit } from '@angular/core';
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
  public newBook: IBook = {title: '', author: '', notes: '', series: '', type: '', genre: '', status: ''};
  // public books: IBook[];
  created = false;
  options: string[];
  types: string[];
  constructor(private bookService: BookService, private modalService: NgbModal) { }

  async ngOnInit() {
   // this.books = await this.bookService.GetBooks();
   this.options = this.bookService.statuses;
   this.types = this.bookService.types;
  }

  async save(): Promise<void> {
    const modal = this.modalService.open(SaveModalComponent);
    const modalComponent = modal.componentInstance;
    modalComponent.modalInstance = modal;

    await this.bookService.AddBook(this.newBook);
      this.newBook = {title: '', author: '', notes: '', series: '', type: '', userId: '', genre: '', status: ''};
    // const theResult = await modal.result;
    // if (theResult === 'yes') {
    //   await this.bookService.AddBook(this.newBook);
    //   this.newBook = {title: '', author: '', notes: '', series: '', type: '', userId: '', genre: '', status: ''};
    // }

  }

}
