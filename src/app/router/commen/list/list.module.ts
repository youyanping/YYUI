import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListComponent],
  exports:[ListComponent]   //公用组件导出共用
})
export class ListModule { }
