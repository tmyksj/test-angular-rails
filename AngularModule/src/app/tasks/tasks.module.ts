import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksRoutingModule } from "./tasks-routing.module";
import { TasksComponent } from "./tasks.component";
import { TasksService } from "./tasks.service";

@NgModule({
  imports: [
    CommonModule,
    TasksRoutingModule,
  ],
  declarations: [
    TasksComponent,
  ],
  providers: [
    TasksService,
  ]
})
export class TasksModule { }
