import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input()
  messageList: any = [];

  constructor(private router: Router) {

  }

  ngOnInit() {

  }

  //跳转到detail页面
  goToDetail(){
    this.router.navigate(['/detail'],{ queryParams: { id: 'item' } });
  }
}
