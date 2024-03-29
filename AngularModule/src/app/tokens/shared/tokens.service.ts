import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { CookieService } from "../../shared/cookie.service";

@Injectable()
export class TokensService {
  private readonly url: string = 'http://localhost:3000/tokens';
  private readonly cookieKey = 'authenticationToken';

  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  authenticate(username: string, password: string): Observable<any> {
    let observable: Observable<any> = this.http.post(this.url, {
      username: username,
      password: password
    });

    observable.subscribe(data => {
      this.cookieService.setItem(this.cookieKey,
        data['authentication_token'],
        31536e3,
        null,
        null,
        null);
    });

    return observable;
  }

  getToken(): string {
    return this.cookieService.getItem(this.cookieKey);
  }

  hasToken(): boolean {
    return this.getToken() != null;
  }

  deleteToken(): Observable<any> {
    let observable: Observable<any> = this.http.delete(this.url, {
      params: {
        authentication_token: this.getToken()
      }
    });

    observable.subscribe(data => {
      this.cookieService.removeItem(this.cookieKey, null);
    });

    return observable;
  }
}
