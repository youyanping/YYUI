import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {MainComponent} from "./main.component";
import {ListModule} from "../commen/list/list.module";


@NgModule({
  imports: [
    CommonModule,
    ListModule,
    //当前页面的路由，展示MainComponent组件内容
    RouterModule.forChild([
      {
        path:'',
        component:MainComponent,
        /*children: [
          { path: '', redirectTo: 'main', pathMatch: 'full' },
          { path: 'detail', component: DetailComponent }  //组件方式的路由
        ]*/
      }
    ])
  ],
  declarations: [MainComponent]
})
export class MainModule { }
