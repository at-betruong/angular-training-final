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
import { AccountComponent } from './account.component';
import { AuthService } from '../core/services/auth.service';
import { DeactivateDialogService } from '../core/sevices/deactivate-dialog.service';
import { LocalerService } from '../core/services/localer.service';
import { CreateComponent } from '../auth/create/create.component';

@NgModule({
  declarations: [
    ProfileComponent,
    DashboardComponent,
    FavotiteComponent,
    AccountComponent,
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  // providers: [AuthService, DeactivateDialogService, LocalerService]
})
export class AccountModule { }
