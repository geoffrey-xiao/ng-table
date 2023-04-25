import {
  ApplicationRef,
  ComponentFactoryResolver,
  Injectable,
  Injector,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { ErrorModalComponent } from './error-modal/error-modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(
    public componentFactory: ComponentFactoryResolver,
    public injector: Injector,
    public applicationRef: ApplicationRef
  ) {}

  public items: any[] = [];

  public componentSubscription: Subscription;

  public alertError() {
    this.queue(ErrorModalComponent, { message: '404' });
  }

  public alertConfirm() {
    this.queue(ConfirmModalComponent, { message: 'test' });
  }

  public queue(component, option) {
    const compoentFactory =
      this.componentFactory.resolveComponentFactory(component);

    const componentRef = compoentFactory.create(this.injector);
    Object.keys(option).forEach((key) => {
      componentRef.instance[key] = option[key];
    });

    this.items.push(componentRef);

    this.next();
    return componentRef;
  }

  public next() {
    if (this.items.length) {
      const last = this.items.shift();
      this.attach(last);
    }
  }

  public attach(componentRef) {
    this.componentSubscription = componentRef.instance.close.subscribe(() => {
      this.componentSubscription.unsubscribe();
      this.componentSubscription = undefined;
      componentRef.destroy();
      this.next();
    });

    const modalLayer = document.getElementById('modal-layer');
    modalLayer.appendChild(componentRef.location.nativeElement);
    this.applicationRef.attachView(componentRef.hostView);
  }
}
