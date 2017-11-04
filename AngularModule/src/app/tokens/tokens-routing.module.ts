import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { TokensComponent } from "./tokens.component";

const tokensRoutes: Routes = [
  { path: 'tokens',  component: TokensComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(tokensRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TokensRoutingModule {
}
