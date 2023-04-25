import { Component, OnInit } from '@angular/core';
import { AlertService } from '../alert.service';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-parent-table',
  templateUrl: './parent-table.component.html',
  styleUrls: ['./parent-table.component.scss'],
})
export class ParentTableComponent implements OnInit {
  constructor(
    public alertService: AlertService,
    public modalService: ModalService
  ) {}

  ngOnInit(): void {}

  openAlert() {
    this.alertService.create();
  }

  openConfirmModal() {
    this.modalService.alertConfirm();
  }

  openErrorModal() {
    this.modalService.alertError();
  }
}
