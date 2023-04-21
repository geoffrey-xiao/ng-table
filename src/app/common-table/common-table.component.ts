import {
  AfterContentInit,
  Component,
  ContentChildren,
  OnInit,
  QueryList,
} from '@angular/core';
import { TemplateHeaderDirective } from '../template-header.directive';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss'],
})
export class CommonTableComponent implements OnInit, AfterContentInit {
  constructor() {}

  @ContentChildren(TemplateHeaderDirective)
  public templates: QueryList<TemplateHeaderDirective>;

  public templateObj: any = {};

  ngOnInit(): void {
    this.init();
  }

  ngAfterContentInit() {
    this.templates.forEach((item) => {
      console.log(item);
      this.templateObj[item.templateName] = item.template;
      console.log(this.templateObj);
    });
  }

  public columns = [
    {
      column: 'id',
      title: 'ID',
    },
    {
      column: 'name',
      title: 'Name',
      render: 'name',
    },
    {
      column: 'age',
      title: 'AGE',
      render: 'age',
    },
    {
      column: 'address',
      title: 'ADDRESS',
    },
  ];

  public data: any = [];

  public init() {
    setTimeout(() => {
      for (let i = 0; i < 10; i++) {
        this.data.push({
          id: i,
          name: `name${i}`,
          age: `age${i}`,
          address: `address${i}`,
        });
      }
    });
  }
}
