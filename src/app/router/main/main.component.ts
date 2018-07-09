import { Component, OnInit } from '@angular/core';
import {UserInfoService} from "../../service/userInfo.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public messageList:any = [];
  public obj:any={
    page:1,
    rows:10,
    messType:2,
    includeDetails:true
  };

  constructor(public userService: UserInfoService,private router: Router) {
    for(var i=0;i<8;i++){
      this.messageList[i] = "item" + i;
    }
  }

  ngOnInit() {
    this.initList(this.obj);
  }

  //处理接口返回的数据操作
  initList(obj:any){
    this.userService.messageList(obj).then((res: any)=> {
      if(res.resultCode==0){
        this.messageList = res.datas.result;
      }
    });
  }

  //跳转到detail页面
  goToDetail(){
    this.router.navigate(['/detail'],{ queryParams: { id: 666 } });
  }
}
