import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthenticationTokenComponent} from "./authentication-token/authentication-token.component";
import {TasksComponent} from "./tasks/tasks.component";
import {AboutComponent} from "./about/about.component";

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'authentication-token', component: AuthenticationTokenComponent },
  { path: 'tasks', component: TasksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
