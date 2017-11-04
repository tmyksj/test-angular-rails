import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { TasksComponent } from './tasks/tasks.component';
import { TasksService } from "./tasks.service";
import { AboutComponent } from './about/about.component';
import { TokensComponent } from './tokens/tokens.component';
import {TokensService} from "./tokens.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {CookieService} from "./cookie.service";

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    AboutComponent,
    TokensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CookieService,
    TokensService,
    TasksService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
