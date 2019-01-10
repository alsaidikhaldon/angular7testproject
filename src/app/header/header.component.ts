import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  item1 ="Home";
  item2 ="Services";
  item3 ="Our works";
  item4 ="About us";
  item5 ="Contact";

  constructor() { }

  ngOnInit() {
  }

}