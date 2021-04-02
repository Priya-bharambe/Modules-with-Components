import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { TeamComponent } from './team/team.component';



@NgModule({
  declarations: [HomeComponent, AboutComponent, ContactComponent, BlogComponent, TeamComponent],
  exports: [HomeComponent, AboutComponent, ContactComponent, BlogComponent, TeamComponent],

  imports: [
    CommonModule
  ]
})
export class NavbarModule { }
