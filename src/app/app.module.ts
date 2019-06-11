import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FeaturesComponent } from './features/features.component';
import { FeaturesModule } from './features/features.module';
import { AuthComponent } from './auth/auth.component';
import { AuthModule } from './auth/auth.module';
import { AccountComponent } from './account/account.component';
import { AccountModule } from './account/account.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
// import { SwiperModule } from 'angular2-useful-swiper';


@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    AuthComponent,
    // AccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FeaturesModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    CoreModule,
    AuthModule,
    // AccountModule,
    RouterModule,
    AppRoutingModule
    // SwiperModule
  ],
  // providers: [FeaturesModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
