import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mdp-oublie',
  templateUrl: './mdp-oublie.component.html',
  styleUrls: ['./mdp-oublie.component.scss'],
})
export class MdpOublieComponent implements OnInit {

  email: string = '';

  constructor() { }

  ngOnInit() {}

}
