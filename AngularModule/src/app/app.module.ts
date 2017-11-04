import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutModule } from "./about/about.module";
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/tasks.module";
import { TokensModule } from "./tokens/tokens.module";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    TasksModule,
    TokensModule,
    SharedModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
