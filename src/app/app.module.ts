import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ForumBodyComponent } from './forum-body/forum-body.component';
import { FooterInfoComponent } from './footer-info/footer-info.component';
import { CreatorSectionComponent } from './creator-section/creator-section.component';
import { ForumInBodySectionComponent } from './forum-in-body-section/forum-in-body-section.component';
import { ForumInBodyPostListComponent } from './forum-in-body-post-list/forum-in-body-post-list.component';
import { ForumInBodyPostThreadComponent } from './forum-in-body-post-thread/forum-in-body-post-thread.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavigationBarComponent,
    ForumBodyComponent,
    FooterInfoComponent,
    CreatorSectionComponent,
    ForumInBodySectionComponent,
    ForumInBodyPostListComponent,
    ForumInBodyPostThreadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
