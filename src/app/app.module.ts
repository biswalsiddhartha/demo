import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { HomePageComponent } from './home-page/home-page.component';
import { SalaryDetailsComponent } from './salary-details/salary-details.component';
import { BasicDetailsComponent } from './basic-details/basic-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaiDetailsComponent } from './bai-details/bai-details.component';
import{MenuComponent}from'./menu/menu.component';
import { from } from 'rxjs';
@NgModule({
  declarations: [AppComponent,HomePageComponent,SalaryDetailsComponent,BasicDetailsComponent,BaiDetailsComponent,MenuComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,ReactiveFormsModule, BrowserAnimationsModule ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
