import {
  Component,
  EventEmitter,
  Input,
  NgZone,
  OnInit,
  Output,
} from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { delay, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  @Input() alertType: string;

  @Input() message: string;

  @Input() timeout: number;

  @Output() closed = new EventEmitter();

  public _close: any = false;

  public timeoutSupscription: Subscription;

  @Input() get close() {
    return this._close;
  }

  set close(value) {
    this._close = value;
    this.closed.emit();
    if (this.timeoutSupscription) {
      this.timeoutSupscription.unsubscribe();
      this.timeoutSupscription = undefined;
    }
  }

  constructor(public zone: NgZone) {}

  ngOnInit(): void {
    if (this.timeout) {
      this.zone.runOutsideAngular(() => {
        this.timeoutSupscription = of(true)
          .pipe(delay(this.timeout))
          .subscribe(() => {
            this.zone.run(() => {
              this.close = true;
            });
          });
      });
    }
  }
}
