import {Injectable} from "@angular/core";

declare  var $:any;  //要用到$ ，需要先在index导入jquery
@Injectable()

export class HttpService{

  public URL:any="https:///";  //接口地址

  constructor(){
  }

  httpPost<T>(url:string,arg:any,arg2?:any):Promise<T>{

    return new Promise((resolve) => {
      $.ajax({
        url:this.URL+url,  //跳转到 action
        data:JSON.stringify(arg),
        timeout : 60000,  //超时时间设置，单位毫秒
        contentType: "application/json; charset=utf-8",
        type:'post',
        cache:false,
        dataType:'json',
        success:function(res) {
          if(res.resultCode==1002){
            location.reload();
          }else{
            resolve(res);
          }
        },
        error : function(res) {
          console.log("网络请求错误",res);
        },
      });
    });
  }

}
