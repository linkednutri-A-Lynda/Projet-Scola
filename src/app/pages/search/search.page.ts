import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  mot: string;
  dure: string;
  price: string;
  datePub: Date;

  constructor() { }

  ngOnInit() {
  }

  search(){
  }

}
