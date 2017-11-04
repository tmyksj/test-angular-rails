import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { TokensService } from "./shared/tokens.service";
import { AuthenticationInfo } from "./shared/authentication-info.model";

@Component({
  selector: 'app-tokens',
  templateUrl: './tokens.component.html',
  styleUrls: ['./tokens.component.css']
})
export class TokensComponent implements OnInit {

  hasErrors: boolean;
  model: AuthenticationInfo;

  constructor(private tokensService: TokensService, private router: Router) {
    this.hasErrors = false;
    this.model = new AuthenticationInfo('', '');
  }

  ngOnInit(): void {
    if (this.tokensService.getToken() != null) {
      this.router.navigateByUrl('/tasks');
    }
  }

  onSubmit(): void {
    this.tokensService.authenticate(this.model.username, this.model.password).subscribe(data => {
      this.router.navigateByUrl('/tasks');
    }, error => {
      this.hasErrors = true;
    })
  }
}
