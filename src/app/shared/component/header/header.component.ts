import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { CookieService } from 'src/app/core/services/cookie.service';
import { DeactivateDialogService } from 'src/app/core/sevices/deactivate-dialog.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {
  status: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private cookieService: CookieService,
    private dialogService: DeactivateDialogService
  ) { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.status = this.cookieService.getCookie('login');
  }

  logout() {
    this.dialogService.confirm('Do you want to logout?');
    this.authService.logout();
  }

}
