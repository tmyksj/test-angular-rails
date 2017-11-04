import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { TokensService } from "../tokens/shared/tokens.service";
import { Task } from "./task.model";

@Injectable()
export class TasksService {
  private readonly url: string = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient, private tokensService: TokensService) {
  }

  getTasks(): Observable<any> {
    return this.http.get(this.url, {
      params: {
        authentication_token: this.tokensService.getToken(),
      }
    });
  }

  postTask(task: Task): Observable<any> {
    return this.http.post(this.url, {
      authentication_token: this.tokensService.getToken(),
      subject: task.subject,
      details: task.details,
    });
  }

  deleteTask(task: Task): Observable<any> {
    return this.http.delete(this.url, {
      params: {
        authentication_token: this.tokensService.getToken(),
        id: task.id.toString(),
      }
    });
  }
}
