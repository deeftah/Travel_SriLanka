import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/Home/page1';
import { Page2 } from '../pages/Categories/page2';
import {AddplacePage} from "../pages/addplace/addplace";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ViewplacePage} from "../pages/viewplace/viewplace";
import {Service} from "../providers/service";
import {ConnectivityService} from "../providers/connectivity-service";
import {MapviewPage} from "../pages/mapview/mapview";


@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    AddplacePage,
    ViewplacePage,
    MapviewPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    AddplacePage,
    ViewplacePage,
    MapviewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Service,
    ConnectivityService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
