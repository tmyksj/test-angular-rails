import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { AuthenticationTokenComponent } from './authentication-token/authentication-token.component';
import { TasksComponent } from './tasks/tasks.component';
import { AuthenticationTokenService } from "./authentication-token.service";
import { TasksService } from "./tasks.service";
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationTokenComponent,
    TasksComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AuthenticationTokenService,
    TasksService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
