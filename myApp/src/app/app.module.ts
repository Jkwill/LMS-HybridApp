import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { LoginPage } from '../pages/login/login'
import { CourseCenterPage } from '../pages/course-center/course-center';
import { ContactPage } from '../pages/contact/contact';
import { CreateLessionPage } from '../pages/create-lession/create-lession'
import { HomePage } from '../pages/home/home';
import { DetailPage } from '../pages/detail/detail'
import { TabsPage } from '../pages/tabs/tabs';
import { VideoPage } from '../pages/video/video'

import { BackButtonService } from '../services/uiService/backButton.service';
import { HttpRequestService } from '../services/httpService/httpRequest.service';
import { AccountService } from '../services/httpService/account.service';
import { CourseService } from '../services/httpService/course.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GetDataProvider } from '../services/get-data/get-data';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    CourseCenterPage,
    ContactPage,
    CreateLessionPage,
    HomePage,
    DetailPage,
    TabsPage,
    VideoPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    CourseCenterPage,
    ContactPage,
    CreateLessionPage,
    HomePage,
    DetailPage,
    TabsPage,
    VideoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BackButtonService,
    HttpRequestService,
    AccountService,
    CourseService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GetDataProvider,
  ]
})
export class AppModule {}
