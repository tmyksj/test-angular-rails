import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TasksComponent} from "./tasks/tasks.component";
import {AboutComponent} from "./about/about.component";
import {TokensComponent} from "./tokens/tokens.component";

const routes: Routes = [
  { path: '',   redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'tokens', component: TokensComponent },
  { path: 'tasks', component: TasksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
