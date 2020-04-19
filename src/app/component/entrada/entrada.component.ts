import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {
private clicked;

  constructor() { }

  ngOnInit() {
  }

  actionMethod(){
    this.clicked = false;
  }

}