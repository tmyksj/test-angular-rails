import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { TokensRoutingModule } from "./tokens-routing.module";
import { TokensComponent } from "./tokens.component";
import { TokensService } from "./shared/tokens.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    TokensRoutingModule,
  ],
  declarations: [
    TokensComponent,
  ],
  providers: [
    TokensService,
  ]
})
export class TokensModule { }
