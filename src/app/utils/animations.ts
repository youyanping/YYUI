import {animate, keyframes, state, style, transition, trigger} from "@angular/animations";

export const fadeIn = trigger('fadeIn', [
  state('in', style({ display: 'none' })), // 默认元素不展开
  transition('void => *', [ // 进场动画
    animate(200, keyframes([
      style({ height: '0', opacity: 0, offset: 0 }), // 元素高度0，元素隐藏(透明度为0)，动画帧在0%
      style({ height: '*', opacity: 1, offset: 1 }) // 200ms后高度自适应展开，元素展开(透明度为1)，动画帧在100%
    ]))
  ]),
  transition('* => void', [
    animate(200, keyframes([
      style({ height: '*', opacity: 1, offset: 0 }), // 与之对应，让元素从显示到隐藏一个过渡
      style({ height: '0', opacity: 0, offset: 1 })
    ]))
  ])
]);

export const transform = trigger('transform', [
 // state('in', style({ left: '0' })), // 默认元素不展开
  transition('void => *', [ // 进场动画
    animate(200, keyframes([
      style({ left: '-100px'}),
      style({ left: '0px'})
    ]))
  ]),
  transition('* => void', [ // 进场动画
    animate(200, keyframes([
      style({ left: '0px'}),
      style({ left: '-100px'})
    ]))
  ])
]);
