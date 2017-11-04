import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { TasksComponent } from "./tasks.component";

const routes: Routes = [
  { path: 'tasks', component: TasksComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class TasksRoutingModule {
}
