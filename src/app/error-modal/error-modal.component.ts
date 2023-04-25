import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.scss'],
})
export class ErrorModalComponent implements OnInit {
  constructor() {}

  @Output() close = new EventEmitter();

  @Input() message: string;

  ngOnInit(): void {}

  public open = true;

  public confirm(flag) {
    this.open = false;
    this.close.emit(flag);
  }
}
