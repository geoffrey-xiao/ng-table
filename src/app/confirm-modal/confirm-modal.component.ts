import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss'],
})
export class ConfirmModalComponent implements OnInit {
  constructor() {}
  @Input() message: string;
  @Output() close = new EventEmitter();

  ngOnInit(): void {}

  public open = true;

  public confirm(flag) {
    this.open = false;
    this.close.emit(flag);
  }
}
