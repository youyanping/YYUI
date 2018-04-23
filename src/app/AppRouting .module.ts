import { NgModule } from '@angular/core';
import { RouterModule, Route }   from '@angular/router';
import {LayoutComponent} from "./layout/layout/layout.component";
import {DetailComponent} from "./router/detail/detail.component";
import {LayoutWithHeaderComponent} from "./layout/layout-with-header/layout-with-header.component";
import {LayoutWithFooterComponent} from "./layout/layout-with-footer/layout-with-footer.component";
import {AnimatePageComponent} from "./router/animate-page/animate-page.component";

//按不同的布局方式来划分路由
const routes: Route[] = [
  //布局一 头+内容+尾
  {
    path:'', //地址不写路由默认展示的组件
    component:LayoutComponent,
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'main', loadChildren: './router/main/main.module#MainModule'},  //懒加载方式路由
      { path: 'detail', component: DetailComponent },  //组件方式的路由
      { path: 'animate', component: AnimatePageComponent }
    ]
  },
  //布局二 头部+内容
  {
    path:'layout1',
    component:LayoutWithHeaderComponent,
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'main', loadChildren: './router/main/main.module#MainModule'},
      { path: 'detail2', component: DetailComponent }
    ]
  },
  //布局三  尾部+内容
  {
    path:'layout2',
    component:LayoutWithFooterComponent,
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'main', loadChildren: './router/main/main.module#MainModule'},
      { path: 'detail', component: DetailComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],   //注意这边导出的是imports的RouterModule ，而不是class
  declarations: []
})
export class AppRoutingModule  { }
