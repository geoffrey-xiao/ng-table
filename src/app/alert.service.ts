import {
  ApplicationRef,
  ComponentFactoryResolver,
  Inject,
  Injectable,
  Injector,
} from '@angular/core';
import { ApplicationConfig } from '@angular/platform-browser';
import { AlertComponent } from './alert/alert.component';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(
    public compoentFactory: ComponentFactoryResolver,
    public injector: Injector,
    public application: ApplicationRef
  ) {}

  create(alertType = 'danger', message = 'test', timeout = 50000) {
    const alertRef =
      this.compoentFactory.resolveComponentFactory(AlertComponent);
    const alert = alertRef.create(this.injector);

    alert.instance.alertType = alertType;
    alert.instance.timeout = timeout;
    alert.instance.message = message;

    let componentSubscription = alert.instance.closed.subscribe(() => {
      componentSubscription.unsubscribe();
      componentSubscription = undefined;
      alert.destroy();
    });
    const alertLayer = document.getElementById('alert-layer');
    alertLayer.appendChild(alert.location.nativeElement);
    this.application.attachView(alert.hostView);
  }
}
