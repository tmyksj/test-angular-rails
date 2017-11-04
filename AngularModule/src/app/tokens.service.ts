import {Injectable, OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class TokensService implements OnInit {
  private readonly url: string = 'http://localhost:3000/tokens';
  private authenticationToken: string;

  constructor(private http: HttpClient) {
    this.authenticationToken = null;
  }

  ngOnInit(): void {
  }

  public authenticate(username: string, password: string): Observable<any> {
    let observable: Observable<any> = this.http.post(this.url, {
      username: username,
      password: password
    });

    observable.subscribe(data => {
      this.authenticationToken = data['authentication_token'];
    });

    return observable;
  }

  public getToken(): string {
    return this.authenticationToken;
  }

  public deleteToken(): Observable<any> {
    let observable: Observable<any> = this.http.delete(this.url, {
      params: {
        authentication_token: this.authenticationToken
      }
    });

    observable.subscribe(data => {
      this.authenticationToken = null;
    });

    return observable;
  }
}
