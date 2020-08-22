import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BookService } from '../services/book.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IBook } from '../ibook';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {

  modalInstance;
  closeResult: string;
  constructor(private router: Router, private route: ActivatedRoute) { }

 ngOnInit() {

  }

  close() {
    this.modalInstance.close('no');
  }
  yes() {
    this.modalInstance.close('yes');
  }


}
