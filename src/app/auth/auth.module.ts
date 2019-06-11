import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { CookieService } from '../core/services/cookie.service';
import { LocalerService } from '../core/services/localer.service';
import { ApiService } from '../core/services/api.service';
import { AuthService } from '../core/services/auth.service';

@NgModule({
  declarations: [
    LoginComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    CoreModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    CookieService,
    LocalerService,
    ApiService
  ]
})
export class AuthModule { }
