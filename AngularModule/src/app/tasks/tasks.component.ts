import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Task } from "./task.model";
import { TasksService } from "./tasks.service";
import { TokensService } from "../tokens/shared/tokens.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[];

  constructor(private tasksService: TasksService,
              private tokensService: TokensService,
              private router: Router) {
  }

  ngOnInit() {
    if (this.tokensService.getToken() == null) {
      this.router.navigateByUrl('/tokens');
      return;
    }

    this.tasksService.getTasks().subscribe(data => {
      this.tasks = [];

      for (let taskData of data['tasks']) {
        let task = new Task();
        task.id = taskData['id'];
        task.subject = taskData['subject'];
        task.details = taskData['details'];
        this.tasks.push(task);
      }
    });
  }
}
