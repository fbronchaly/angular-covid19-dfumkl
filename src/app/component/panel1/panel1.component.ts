import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-panel1',
  templateUrl: './panel1.component.html',
  styleUrls: ['./panel1.component.css']
})
export class Panel1Component implements OnInit {


  constructor(private router: Router) {
   }

  ngOnInit() {
    }

  
    salto(){

    this.router.navigate(['/profile-nefro']);
}

}