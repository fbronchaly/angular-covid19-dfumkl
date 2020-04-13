import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-consentimiento',
  templateUrl: './consentimiento.component.html',
  styleUrls: ['./consentimiento.component.css']
})
export class ConsentimientoComponent implements OnInit {

  constructor(
    public auth:AuthService
  ) { }

  ngOnInit() {
  }

}