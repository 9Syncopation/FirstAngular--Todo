import { Component } from '@angular/core';

// decorator
@Component({
  selector: 'app-root',// the app root, injects the code
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'firstAngular';
  date =new Date();
  name:string = 'Eyal';

 }
