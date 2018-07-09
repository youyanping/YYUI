import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {

  public id:any;

  constructor(public activateRouter:ActivatedRoute) { }

  ngOnInit() {

    //获取 main 页面传递的参数 id
    this.activateRouter.queryParams.subscribe((params: Params) => {
      this.id = params.id;
    });
  }

}
