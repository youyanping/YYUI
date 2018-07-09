import {Injectable } from '@angular/core';
import {HttpService} from "./http.service";

@Injectable()
export class UserInfoService {

  constructor(private httpService: HttpService) { }

  /*消息列表*/
  messageList(obj:any){
    var url = "message/list";
    return this.httpService.httpPost(url, obj);
  }

}
