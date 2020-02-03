import { Component, OnInit, Input, InputDecorator } from '@angular/core';
import { TwoWayInputComponent } from '../two-way-input/two-way-input.component';

@Component({
  selector: 'app-two-way-output',
  templateUrl: './two-way-output.component.html',
  styleUrls: ['./two-way-output.component.css']
})
export class TwoWayOutputComponent implements OnInit {

  @Input() inputString: string;

  constructor() { }

  ngOnInit() {
  }

}
