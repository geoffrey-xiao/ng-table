import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { CommonTableComponent } from './common-table/common-table.component';
import { ParentTableComponent } from './parent-table/parent-table.component';
import { TemplateHeaderDirective } from './template-header.directive';
import { TestLinkComponent } from './test-link/test-link.component';
@NgModule({
  declarations: [AppComponent, CommonTableComponent, ParentTableComponent, TemplateHeaderDirective, TestLinkComponent],
  imports: [BrowserModule, AppRoutingModule, ClarityModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
