import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiuxdesignerComponent } from './uiuxdesigner/uiuxdesigner.component';
import { SoftwareengineerComponent } from './softwareengineer/softwareengineer.component';
import { TesterComponent } from './tester/tester.component';
import { IosdeveloperComponent } from './iosdeveloper/iosdeveloper.component';
import { FullstackdeveloperComponent } from './fullstackdeveloper/fullstackdeveloper.component';



@NgModule({
  declarations: [UiuxdesignerComponent, SoftwareengineerComponent, TesterComponent, IosdeveloperComponent, FullstackdeveloperComponent],
  exports: [UiuxdesignerComponent, SoftwareengineerComponent, TesterComponent, IosdeveloperComponent, FullstackdeveloperComponent],

  imports: [
    CommonModule
  ]
})
export class CareerModule { }
