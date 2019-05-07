import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; //
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AccountRoutingModule } from './account-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { CoreModule } from '../core/core.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FavotiteComponent } from './favotite/favotite.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProfileComponent,
    DashboardComponent,
    FavotiteComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    CoreModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ]
})
export class AccountModule { }
