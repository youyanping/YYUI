import {BrowserModule } from '@angular/platform-browser';
import {NgModule } from '@angular/core';

import {AppComponent } from './app.component';
import {DetailComponent} from "./router/detail/detail.component";
import {LayoutWithHeaderComponent} from "./layout/layout-with-header/layout-with-header.component";
import {HeaderComponent} from "./layout/header/header.component";
import {FooterComponent } from './layout/footer/footer.component';
import {LayoutWithFooterComponent} from "./layout/layout-with-footer/layout-with-footer.component";
import {CommonModule} from "@angular/common";
import {LayoutComponent} from "./layout/layout/layout.component";
import {AppRoutingModule} from "./AppRouting .module";
import {UserInfoService} from "./service/userInfo.service";
import {HttpService} from "./service/http.service";
import {AnimatePageComponent} from "./router/animate-page/animate-page.component";


@NgModule({
  //声明的组件，只能在一个module文件声明，否则会报错
  declarations: [
    AppComponent,
    DetailComponent,
    LayoutWithHeaderComponent,
    HeaderComponent,
    LayoutWithFooterComponent,
    FooterComponent,
    LayoutComponent,
    AnimatePageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule  //导入路由模块
  ],
  providers: [UserInfoService,HttpService],  //新建的service文件 要在此处添加这些依赖
  bootstrap: [AppComponent]
})
export class AppModule { }
