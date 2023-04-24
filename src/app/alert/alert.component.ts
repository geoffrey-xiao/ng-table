import {
  Component,
  EventEmitter,
  Input,
  NgZone,
  OnInit,
  Output,
} from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { delay, of } from 'rxjs';

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

  public hidden = false;

  @Input() get close() {
    return this._close;
  }

  set close(value) {
    this._close = value;
    this.closed.emit();
  }

  constructor(public zone: NgZone) {}

  ngOnInit(): void {
    if (this.timeout) {
      this.zone.runOutsideAngular(() => {
        of(true)
          .pipe(delay(this.timeout))
          .subscribe(() => {
            console.log('lll');
            this.zone.run(() => {
              this.close = true;
              this.hidden = true;
            });
          });
      });
    }
  }
}
