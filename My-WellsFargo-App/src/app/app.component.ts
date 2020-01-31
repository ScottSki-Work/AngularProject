import { Component, OnInit } from '@angular/core';
import { MyServiceTestService } from './my-service-test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'My-WellsFargo-App';
  greeting = '';

  constructor(private myService: MyServiceTestService){}

  ngOnInit(){
    this.greeting = this.myService.getMyGreeting();
  }
}
