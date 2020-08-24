import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-save-modal',
  templateUrl: './save-modal.component.html',
  styleUrls: ['./save-modal.component.css']
})
export class SaveModalComponent implements OnInit {

  modalInstance;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  close() {
    this.modalInstance.close('no');
    this.router.navigate(['/catalog']);
  }
  yes() {
    this.modalInstance.close('yes');
  }

}
