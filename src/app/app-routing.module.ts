import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './navbar/home/home.component';
import { AboutComponent } from './navbar/about/about.component';
import { ContactComponent } from './navbar/contact/contact.component';
import { BlogComponent } from './navbar/blog/blog.component';
import { TeamComponent } from './navbar/team/team.component';
import { UiuxdesignerComponent } from './career/uiuxdesigner/uiuxdesigner.component';
import { SoftwareengineerComponent } from './career/softwareengineer/softwareengineer.component';
import { TesterComponent } from './career/tester/tester.component';
import { IosdeveloperComponent } from './career/iosdeveloper/iosdeveloper.component';
import { FullstackdeveloperComponent } from './career/fullstackdeveloper/fullstackdeveloper.component';
import { DigitalmarketingComponent } from './service/digitalmarketing/digitalmarketing.component';
import { WebdesigningComponent } from './service/webdesigning/webdesigning.component';
import { GrahicdesignComponent } from './service/grahicdesign/grahicdesign.component';
import { WebdevelopmentComponent } from './service/webdevelopment/webdevelopment.component';




const routes: Routes = [
{path:'',component:HomeComponent},
{path:'about',component:AboutComponent},
{path:'contact',component:ContactComponent},
{path:'blog',component:BlogComponent},
{path:'team',component:TeamComponent},
{path:'ui',component:UiuxdesignerComponent},
{path:'software',component:SoftwareengineerComponent},
{path:'tester',component:TesterComponent},
{path:'ios',component:IosdeveloperComponent},
{path:'fullstack',component:FullstackdeveloperComponent},
{path:'digital',component:DigitalmarketingComponent},
{path:'webdesign',component:WebdesigningComponent},
{path:'graphic',component:GrahicdesignComponent},
{path:'webdevelopment',component:WebdevelopmentComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
