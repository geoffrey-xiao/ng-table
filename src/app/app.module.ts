import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { CommonTableComponent } from './common-table/common-table.component';
import { ParentTableComponent } from './parent-table/parent-table.component';
import { TemplateHeaderDirective } from './template-header.directive';
import { TestLinkComponent } from './test-link/test-link.component';
import { AlertComponent } from './alert/alert.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { ErrorModalComponent } from './error-modal/error-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CommonTableComponent,
    ParentTableComponent,
    TemplateHeaderDirective,
    TestLinkComponent,
    AlertComponent,
    ConfirmModalComponent,
    ErrorModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
