import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-animate-page',
  templateUrl: './animate-page.component.html',
  styleUrls: ['./animate-page.component.css']
})
export class AnimatePageComponent implements OnInit {

  public example = "$aaron.animate({\n" +
    "                height: '50'  //属性\n" +
    "              }, {\n" +
    "                duration :2000,\n" +
    "                //每一个动画都会调用\n" +
    "                step: function(now, fx) {\n" +
    "                $aaron.text('高度的改变值:'+now)\n" +
    "              }\n" +
    "        });";
  constructor() { }

  ngOnInit() {

    var $aaron = $("#aaron");
    $("#exec").click(function() {
      var v = $("#animation").val();
      if (v == "1") {
        // 数值的单位默认是px
        $aaron.animate({
          width  :300,
          height :300
        });
      } else if (v == "2") {
        // 在现有高度的基础上增加100px
        $aaron.animate({
          width  : "+=100px",
          height : "+=100px"
        });
      } else if (v == "3") {
        $aaron.animate({
          fontSize:60
        },3000,function(){
          alert("动画执行完毕！")
        });
      } else if (v == "4") {
        //通过toggle参数切换高度
        $aaron.animate({
          height: "toggle"
        });
      }else if (v == "5"){
        //观察每一次动画的改变
        $aaron.animate({
          height: '50'
        }, {
          duration :2000,
          //每一个动画都会调用
          step: function(now, fx) {
            $aaron.text('高度的改变值:'+now)
          }
        });
      }else if (v == "6"){
        //观察每一次进度的变化
        $aaron.animate({
          height: '50'
        }, {
          duration :2000,
          //每一步动画完成后调用的一个函数，
          //无论动画属性有多少，每个动画元素都执行单独的函数
          progress: function(now, fx) {
            $aaron.text('进度:'+arguments[1])
            // var data = fx.elem.id + ' ' + fx.prop + ': ' + now;
            // alert(data)
          }
        })
      }
    });

    $("#exec1").click(function(){
      $aaron.stop();
    });
    $("#exec2").click(function(){
      $aaron.stop(true);
    });
    $("#exec3").click(function(){
      $aaron.stop(true,true);
    });

    /* 多物体运动 === 红 */
    var oLi = $('.li0');
    for(var i = 0;i < oLi.length;i++){
      oLi[i].timer = null;//在对象上定义一个单独的属性值
      oLi[i].onmouseover = function(){
        startMove(this,400);//this来指定所选择的当前元素
      }
      oLi[i].onmouseout = function(){
        startMove(this,200);
      }
    }

    //var timer = null;
    function startMove(obj,target){
      clearInterval(obj.timer);
      obj.timer = setInterval(function(){
        var speed = (target - obj.offsetWidth)/8;
        speed = speed >0?Math.ceil(speed):Math.floor(speed);
        if(obj.offsetWidth == target){
          clearInterval(obj.timer);
        }else{
          obj.style.width = obj.offsetWidth+speed+'px';
        }
      },30);
    }

    /* 多物体透明度 */
    var oDiv = $('.li1');
    for(var i=0,l=oDiv.length;i<l;i++){
      oDiv[i].alpha=30;
      oDiv[i].onmouseover=function(){
        startChange(this,100);
      }
      oDiv[i].onmouseout=function(){
        startChange(this,30);
      }
    }
    function startChange(obj,target){
      clearInterval(obj.timer);
      var speed=obj.alpha>target?-10:10;
      obj.timer=setInterval(function(){
        //var speed=obj.alpha>target?-10:10;
        if(obj.alpha==target){
          clearInterval(obj.timer);
        }else{
          obj.alpha+=speed;
          obj.style.filter='alpha(opacity:'+obj.alpha+')';
          obj.style.opacity=obj.alpha/100;
        }
      },30)
    }


  }
}
