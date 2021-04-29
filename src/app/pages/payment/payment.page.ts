import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  titulaire: string;
  numCarte: number;
  date: Date;
  cvc: number;
  promo: string;

  constructor() { }

  ngOnInit() {
  }

  payer(){

  }

}
