import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[template]',
})
export class TemplateHeaderDirective {
  @Input('template') templateName: any;
  constructor(public template: TemplateRef<any>) {}
}
