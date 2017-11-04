import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieService } from "./cookie.service";

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    CookieService,
  ]
})
export class SharedModule {
}
