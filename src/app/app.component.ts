import { Component } from '@angular/core';



@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
private cookieLawSeen: boolean;


 
  public seen(evt: any) {
    this.cookieLawSeen = evt;
  }

onActivate(event) {
    window.scroll(0,0);
    //or document.body.scrollTop = 0;
    //or document.querySelector('body').scrollTo(0,0)

}


constructor(
  
){}



}
