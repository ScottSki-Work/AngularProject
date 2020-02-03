import { Component, OnInit, Output, OutputDecorator, Input } from '@angular/core';

@Component({
  selector: 'app-two-way-input',
  templateUrl: './two-way-input.component.html',
  styleUrls: ['./two-way-input.component.css']
})
export class TwoWayInputComponent implements OnInit {

  inputString: string = "test";

  constructor() { }

  onKeyUp(event: any){
    this.inputString = event.target.value;
  }

  ngOnInit() {
  }

}
