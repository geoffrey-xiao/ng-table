import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-link',
  templateUrl: './test-link.component.html',
  styleUrls: ['./test-link.component.scss'],
})
export class TestLinkComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() title: string;

  alert() {
    window.alert(this.title);
  }
}
