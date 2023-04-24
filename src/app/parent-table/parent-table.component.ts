import { Component, OnInit } from '@angular/core';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-parent-table',
  templateUrl: './parent-table.component.html',
  styleUrls: ['./parent-table.component.scss'],
})
export class ParentTableComponent implements OnInit {
  constructor(public alertService: AlertService) {}

  ngOnInit(): void {}

  openAlert() {
    this.alertService.create();
  }
}
