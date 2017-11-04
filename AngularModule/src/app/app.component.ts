import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { TokensService } from "./tokens/shared/tokens.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'TaLA (Tasks List App)';

  constructor(private tokensService: TokensService, private router: Router) {
  }

  isSignedIn(): boolean {
    return this.tokensService.hasToken();
  }

  signOut(): void {
    this.tokensService.deleteToken().subscribe(data => {
      this.router.navigateByUrl('/');
    });
  }
}
