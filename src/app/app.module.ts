import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogInfoComponent } from './blog/blog-info.component';
import { FormsModule } from '@angular/forms';
import { BrideDetailComponent } from './bride/bride-detail.component';
import { GroomDetailComponent } from './groom/groom-detail.component';
import { WelcomeDetailComponent } from './home/welcome-detail.component';
import {RouterModule} from '@angular/router';
import { GuestDetailComponent } from './guestBook/guest-detail.component';
import { BlogAddComponent } from './blogAdd/blog-add.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BlogInfoComponent,
    BrideDetailComponent,
    GroomDetailComponent,
    WelcomeDetailComponent,
    GuestDetailComponent,
    BlogAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
        RouterModule.forRoot([
      { path: 'bride', component: BrideDetailComponent },
      { path: 'groom', component: GroomDetailComponent },
      { path: 'welcome', component: WelcomeDetailComponent },
      { path: 'guestBook', component: GuestDetailComponent },
      {path: 'test', component: BlogAddComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
