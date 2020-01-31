import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceTestService {

  getMyGreeting(): string{
    return ("Greetings from my service!");
  }

  constructor() { }
}
