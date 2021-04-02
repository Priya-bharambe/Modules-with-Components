import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DigitalmarketingComponent } from './digitalmarketing/digitalmarketing.component';
import { WebdesigningComponent } from './webdesigning/webdesigning.component';
import { GrahicdesignComponent } from './grahicdesign/grahicdesign.component';
import { WebdevelopmentComponent } from './webdevelopment/webdevelopment.component';



@NgModule({
  declarations: [DigitalmarketingComponent, WebdesigningComponent, GrahicdesignComponent, WebdevelopmentComponent],
  exports: [DigitalmarketingComponent, WebdesigningComponent, GrahicdesignComponent, WebdevelopmentComponent],

  imports: [
    CommonModule
  ]
})
export class ServiceModule { }
