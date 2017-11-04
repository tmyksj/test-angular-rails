import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { TasksRoutingModule } from "./tasks-routing.module";
import { TasksComponent } from "./tasks.component";
import { TasksService } from "./tasks.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    TasksRoutingModule,
  ],
  declarations: [
    TasksComponent,
  ],
  providers: [
    TasksService,
  ]
})
export class TasksModule {
}
