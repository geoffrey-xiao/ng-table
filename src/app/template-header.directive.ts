import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[templateName]',
})
export class TemplateHeaderDirective {
  @Input() templateName: any;
  constructor(public template: TemplateRef<any>) {}
}
